import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'shop-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shop-products.component.html',
  styleUrl: './shop-products.component.scss'
})
export class ShopProductsComponent {

  //https://codepen.io/sunshinetainted/pen/vYeGVNd
  //https://codepen.io/NewbieRuby/pen/rNYejNb


  ngOnInit() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(".massiveImage", {backgroundImage: `url(https://source.unsplash.com/random/${innerWidth * 3}x${innerHeight})`})

    gsap.to(".massiveImage", {
      xPercent: -100, 
      x: () => innerWidth,
      ease: "none",
      scrollTrigger: {
        trigger: ".massiveImage",
        start: "top top",
        end: () => innerWidth * 3,
        scrub: true,
        pin: true,
        invalidateOnRefresh: true,
        anticipatePin: 1
      }
    });
  }
}
