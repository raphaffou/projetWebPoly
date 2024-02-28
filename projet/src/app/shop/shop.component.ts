import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { Router } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'shop',
  standalone: true,
  imports: [ HeaderComponent, CommonModule, NgOptimizedImage],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {
  //https://codepen.io/sunshinetainted/pen/vYeGVNd
  //https://codepen.io/NewbieRuby/pen/rNYejNb

  products = products;
  filteredProducts = products;

  constructor(private router: Router, private cartService: CartService) { }

  openPage(product: any) {
    this.router.navigate(['/product-page', product.id]);
  }

  addtoCart(product: any) {
    this.cartService.addToCart(product);
  }

  selectedCategory = 'all';
  selectedPrice = 'all';

  onCategoryChange(category: string) {
    this.selectedCategory = category;
    this.filterProducts();
  }

  onPriceChange(price: string) {
    this.selectedPrice = price;
    this.filterProducts();
  }

  filterProducts() {
    this.filteredProducts = this.products.filter(product => {
      let isCategoryMatch = this.selectedCategory === 'all' || product.category === this.selectedCategory;
      let isPriceMatch = this.selectedPrice === 'all' || this.isPriceInRange(product.price, this.selectedPrice);
      return isCategoryMatch && isPriceMatch;
    });
  }
  
  isPriceInRange(price: number, range: string) {
    let [min, max] = range.split('-').map(Number);
    return price >= min && price <= max;
  }


  ngOnInit() {
    gsap.registerPlugin(ScrollTrigger);

    let products:any[] = gsap.utils.toArray(".product");
    let images_width:any = gsap.getProperty("#caroussel", "width", "px");
    let header_height:any = gsap.getProperty("#header", 'height');

    gsap.to("#caroussel", {
      xPercent: -165,
      x : 0,
      ease: "none",
      scrollTrigger: {
        trigger: "#caroussel",
        start: () => `top-=${header_height} top`,
        end: () =>  2*images_width/3,
        scrub: 1,
        pin: true,
        snap: images_width / (products.length-1),
        invalidateOnRefresh: true,
        anticipatePin: 1
      }
    });


    const text_sections = gsap.utils.toArray('.text');

    text_sections.forEach((section:any) => {
      gsap.set(section, { y: 30, opacity: 0});

      ScrollTrigger.create({
        trigger: section,
        start: () => "top center", //`top+=${gsap.getProperty(section, 'y')}/4 bottom-=100`,
        end: () => "center center",
        onEnter: () => {
          gsap.to(section, {y: 0, opacity: 1});
        },
        onLeaveBack: () => {
          gsap.to(section, {y: 50, opacity: 0});
        },
        invalidateOnRefresh: true
      })});

  }
  
}
