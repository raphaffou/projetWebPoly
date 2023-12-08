import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { ShopProductsComponent } from '../components/shop-products/shop-products.component';
import { ShopSidebarComponent } from '../components/shop-sidebar/shop-sidebar.component';

@Component({
  selector: 'shop',
  standalone: true,
  imports: [ShopProductsComponent, ShopSidebarComponent, HeaderComponent, CommonModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {

}
