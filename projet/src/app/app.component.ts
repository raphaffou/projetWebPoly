import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeroAnimComponent } from './hero-anim/hero-anim.component';

@Component({
  selector: 'app',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [CommonModule, RouterOutlet, HeroAnimComponent]
})
export class AppComponent {
  title = 'three';
}
