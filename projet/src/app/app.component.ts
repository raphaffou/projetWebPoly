import { Component, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { HeroAnimComponent } from './hero-anim/hero-anim.component';

@Component({
  selector: 'app',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, HeroAnimComponent]
})
export class AppComponent {
  title = 'three';
}
