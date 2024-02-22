import { Injectable } from '@angular/core';
import { Product, products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = products;

  constructor() { }

  // TODO: add Product class
  getProductById(productId: number): Product|null {
    for (const product of products) {
      if (product.id == productId)
        return product;
    }
    return null;
  }

  getProductName(productId: number) {
    return this.getProductById(productId)?.name;
  }

  getProductPrice(productId: number) {
    return this.getProductById(productId)?.price;
  }
}
