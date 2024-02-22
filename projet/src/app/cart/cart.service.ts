import { Injectable, signal } from '@angular/core';
import { Product } from '../products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Map<number, number> = new Map();
  //items: Product[] = [];
  itemCount = signal(0);

  constructor() { }

  addToCart(product: Product) {
    //this.items.push(product);
    let count = this.items.get(product.id);
    if (! count)
      this.items.set(product.id, 1);
    else
      this.items.set(product.id, count+1);
    this.itemCount.update(value => value + 1);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    //this.items = [];
    return this.items;
  }

  getItemCount() {
    return this.itemCount();
  }
}
