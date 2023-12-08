import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
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

    let products = gsap.utils.toArray(".product");

    gsap.to("#caroussel", {
      xPercent: -100 * (products.length - 1),
      x: () => innerWidth,
      ease: "none",
      scrollTrigger: {
        trigger: "#caroussel",
        start: "top top",
        end: () => innerWidth * 3,
        scrub: 1,
        pin: true,
        snap: 1 / (products.length - 1),
        invalidateOnRefresh: true,
        anticipatePin: 1
      }
    });


    const text_sections = gsap.utils.toArray('.text');
    console.warn(text_sections);

    text_sections.forEach((section:any) => {
      gsap.set(section, { y: 30, opacity: 0});

      ScrollTrigger.create({
        trigger: section,
        markers : true,
        start: () => `top-=${gsap.getProperty(section, 'y')} bottom-=100`,
        end: () => `+=${section.clientHeight}`,
        onEnter: () => {
          gsap.to(section, {y: 0, opacity: 1});
        },
        onLeaveBack: () => {
          gsap.to(section, {y: 30, opacity: 0});
        }
      })});

  }
}

/*
xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: "+=3500",
  */