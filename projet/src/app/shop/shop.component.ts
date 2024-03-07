import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import SplitType from 'split-type';
import { Router } from '@angular/router';
import { categories } from '../categories';
import { CartService } from '../cart/cart.service';
import { ProductService } from '../product.service';
import { Product } from '../products';

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

  categories = categories;
  products: Product[] = [];
  filteredProducts: Product[] = [];
  selectedCategory = categories.All;
  selectedPrice = 'all';


  constructor(private router: Router, private cartService: CartService, private productService: ProductService) {
  }

  openPage(product: any) {
    this.router.navigate(['/product-page', product.id]);
    // const url = this.router.serializeUrl(
    //   this.router.createUrlTree([`/product-page/${product.id}`])
    // );
    // window.open(url, '_blank');
  }

  addtoCart(product: any) {
    this.cartService.addToCart(product);
  }

  onCategoryChange(category: string) {
    this.selectedCategory = categories[category as keyof typeof categories];
    this.filterProducts();
  }

  onPriceChange(price: string) {
    this.selectedPrice = price;
    this.filterProducts();
  }

  filterProducts() {
    this.filteredProducts = this.products.filter(product => {
      let isCategoryMatch = this.selectedCategory === categories.All || product.categories!.includes(this.selectedCategory);
      let isPriceMatch = this.selectedPrice === 'all' || this.isPriceInRange(product.price!, this.selectedPrice);
      return isCategoryMatch && isPriceMatch;
    });
  }
  
  isPriceInRange(price: number, range: string) {
    let [min, max] = range.split('-').map(Number);
    return price >= min && price <= max;
  }


  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      this.filteredProducts = products;
    });


    gsap.registerPlugin(ScrollTrigger);

    let pinSpacerElement = document.querySelector('.pin-spacer');
    console.debug(pinSpacerElement);

    let products:any[] = gsap.utils.toArray(".product");
    let images_width:any = gsap.getProperty("#caroussel", "width", "px");
    let scroller_width:any = gsap.getProperty("body", "width");
    let scroller_height:any = gsap.getProperty("body", "height");
    let header_height:any = gsap.getProperty("#header", 'height');

    gsap.to("#caroussel", {
      xPercent: -145*scroller_height/scroller_width,
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
        anticipatePin: 1,
      }
    });


    const textSections = gsap.utils.toArray('.text');

    // https://gsap-text-animator.webflow.io/
    textSections.forEach((section:any) => {
      let typeSplit = new SplitType(section, {
        types: 'lines,words,chars',
        tagName: 'span'
      });

      gsap.from(typeSplit.chars, {
        opacity: 0.3,
        duration: 0.1,
        ease: 'power1.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: section,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        }
      });
    });
  }
  
}
