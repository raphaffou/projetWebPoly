import { Injectable } from '@angular/core';
import { Product, products } from './products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = products;

  constructor(private http: HttpClient) { }

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

  getProductDescription(productId: number) {
    return this.getProductById(productId)?.description;
  }

  getProductImagePath(productId: number) {
    return this.getProductById(productId)?.image;
  }

  getProducts() {
    return this.http.get<Product[]>(window.location.origin+'/api/products/');
  }
}
