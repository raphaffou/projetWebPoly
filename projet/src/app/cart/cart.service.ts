import { Injectable, signal } from '@angular/core';
import { Product } from '../products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Map<number, number> = new Map();
  itemCount = signal(0);

  constructor() { }

  addToCart(product: Product) {
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
    this.items.clear();
    this.itemCount.set(0);
  }

  getItemCount() {
    return this.itemCount();
  }
}
