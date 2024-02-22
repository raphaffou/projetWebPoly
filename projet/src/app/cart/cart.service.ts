import { Injectable, signal } from '@angular/core';
import { Product } from '../products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
  itemCount = signal(0);

  constructor() { }

  addToCart(product: Product) {
    this.items.push(product);
    this.itemCount.update(value => value + 1);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getItemCount() {
    return this.itemCount();
  }
}
