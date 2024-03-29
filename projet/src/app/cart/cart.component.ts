import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { CartService } from './cart.service';
import { ProductService } from '../product.service';
import { ChevronDownComponent } from '../../assets/chevron-down/chevron-down.component';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'cart',
  standalone: true,
  imports: [HeaderComponent, CommonModule, ChevronDownComponent, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  shippingCost: number = 4.99;

  constructor(
    private router : Router,
    public cartService: CartService,
    public productService: ProductService,
    private http: HttpClient
  ) {}

  getItems() {
    return this.cartService.getItems();
  }

  getQuantityArray() {
    const array = [1, 2, 3, 4, 5];
    return array;
  }

  openPage(product: any) {
    this.router.navigate(['/product-page', product.key]);
  }

}
