import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { CartService } from './cart.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'cart',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  constructor(public cartService: CartService, public productService: ProductService) {}

  getItems() {
    return this.cartService.getItems();
  }
}
