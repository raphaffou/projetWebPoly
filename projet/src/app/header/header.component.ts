import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent{

  constructor(private cartService: CartService) {}

  isCartEmpty() {
    return this.cartService.getItemCount() == 0;
  }

  getCartItemCount() {
    return this.cartService.getItemCount();
  }
}
