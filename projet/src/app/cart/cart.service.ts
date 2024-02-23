import { Injectable, WritableSignal, signal } from '@angular/core';
import { Product } from '../products';
import { producerNotifyConsumers } from '@angular/core/primitives/signals';
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

  addToCart(product: Product) {
    let count = this.items.get(product.id);
    if (! count)
      this.items.set(product.id, 1);
    else
      this.items.set(product.id, count+1);

    this.itemCount.update(value => value + 1);
    this.totalAmount += product.price;

    this.updateSessionStorage();
  }

  removeFromCart(productId: number) {
    let product = this.productService.getProductById(productId);
    let count = this.items.get(productId);

    // FIXME: if count undefined -> delete entry from items?
    this.items.delete(productId);
    this.itemCount.update(value => count ? value-count : value);
    this.totalAmount -= count && product?.price ? count*product?.price : 0;

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

  private updateSessionStorage() {
    sessionStorage.setItem(this.storageKey, JSON.stringify({
      items: JSON.stringify(Array.from(this.items.entries())),
      itemCount: this.itemCount(),
      totalAmount: this.totalAmount
    }));
  }
}
