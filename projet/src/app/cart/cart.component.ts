import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { CartService } from './cart.service';
import { ProductService } from '../product.service';
import { ChevronDownComponent } from '../../assets/chevron-down/chevron-down.component';

@Component({
  selector: 'cart',
  standalone: true,
  imports: [HeaderComponent, CommonModule, ChevronDownComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  constructor(public cartService: CartService, public productService: ProductService) {}

  getItems() {
    return this.cartService.getItems();
  }

  getQuantityArray() {
    const array = [1, 2, 3, 4, 5];
    return array;
  }
}
