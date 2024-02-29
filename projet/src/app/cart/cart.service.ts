import { Injectable, WritableSignal, signal } from '@angular/core';
import { Product } from '../products';
import { ProductService } from '../product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Map<number, number>;
  itemCount: WritableSignal<number>;
  totalAmount: number;
  storageKey = "cart";

  constructor(private productService: ProductService) {
    let cartString = sessionStorage.getItem(this.storageKey);
    if (cartString) {
    // session storage contains cart items
      let cart = JSON.parse(cartString);
      this.items = new Map(JSON.parse(cart.items));
      this.itemCount = signal(+cart.itemCount);
      this.totalAmount = cart.totalAmount;
    } else {
    // empty cart
      this.items = new Map<number, number>();
      this.itemCount = signal(0);
      this.totalAmount = 0;
    }
  }

  addToCart(product: Product, quantity: number = 1) {
    let count = this.items.get(product.id) || 0;
    let added = Math.min(count+quantity, 5) - count;
    this.items.set(product.id, count+added); // max five items of the same product in cart
    this.itemCount.update(value => value+added);
    this.totalAmount += product.price * added;
    if(added>0)
      alert(numberToName(added)+" "+product.name+" was added to your cart.");  // maybe add a continue shopping and to cart thing
    else
      alert("You can't add more than 5 of the same item to your cart.");
    this.updateSessionStorage();
  }

  removeFromCart(productId: number) {
    let product = this.productService.getProductById(productId);
    let count = this.items.get(productId);

    // FIXME: if count undefined -> delete entry from items?  | Mathieu : I think yes, the entry may not have been deleted properly for some reasons, it's more robust
    this.items.delete(productId);
    this.itemCount.update(value => count ? value-count : value);
    this.totalAmount -= count && product?.price ? count * product?.price : 0;

    this.updateSessionStorage();
  }

  setItemQuantity(productId: number, quantity: number|string) {
    // FIXME: only allow numbers  | Mathieu : you can"t, #itemQuantity is a string but is always a Number string so it's ok
    let quantityNew: number;
    if (typeof quantity == 'string')
      quantityNew = Number(quantity);
    else
      quantityNew = quantity;

    // TODO: add methods to calculate and update itemCount and totalAmount dynamically
    let quantityOld = this.items.get(productId);
    let product = this.productService.getProductById(productId);

    this.items.set(productId, quantityNew);

    this.itemCount.update(value => quantityOld ? value-quantityOld+quantityNew : value);
    this.totalAmount -= quantityOld && product?.price ? quantityOld * product?.price : 0;
    this.totalAmount += product?.price ? quantityNew * product?.price : 0;

    this.updateSessionStorage();
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items.clear();
    this.itemCount.set(0);
    this.totalAmount = 0;

    // update session storage
    sessionStorage.removeItem(this.storageKey)
  }

  getItemCount() {
    return this.itemCount();
  }

  getTotalAmount() {
    return this.totalAmount;
  }

  getProductTotalAmount(productId: number) {
    let price = this.productService.getProductPrice(productId);
    let quantity = this.items.get(productId);
    return  price && quantity ? price * quantity : 0;
  }

  isEmpty() {
    return this.itemCount() == 0;
  }

  private updateSessionStorage() {
    sessionStorage.setItem(this.storageKey, JSON.stringify({
      items: JSON.stringify(Array.from(this.items.entries())),
      itemCount: this.itemCount(),
      totalAmount: this.totalAmount
    }));
  }
}


function numberToName(num: number): string {
  switch(num) {
    case 1: return 'One';
    case 2: return 'Two';
    case 3: return 'Three';
    case 4: return 'Four';
    case 5: return 'Five';
    default: return 'number out of range';
  }
}