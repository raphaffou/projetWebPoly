import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { products } from '../products';
import { HeaderComponent } from '../header/header.component';
import { CartService } from '../cart/cart.service';
import { ChevronDownComponent } from '../../assets/chevron-down/chevron-down.component';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [CommonModule, HeaderComponent, ChevronDownComponent],
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  product: any;
  quantity: number = 1;

  constructor(private route: ActivatedRoute, public cartService: CartService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.product = products.find(product => product.id == params['id']);
    });
  }

  addToCart() {
    alert(this.quantity.toLocaleString("en")+" "+this.product.name+" added to cart");
    this.cartService.addToCart(this.product, this.quantity);
  }

  getItems() {
    return this.cartService.getItems();
  }

  getQuantityArray() {
    const array = [1, 2, 3, 4, 5];
    return array;
  }

  setQuantity(quantity: number|string) {
    this.quantity = Number(quantity);
  }

}