import { Component } from '@angular/core';
import { Scene } from './scene.component';
import { NgtCanvas } from 'angular-three';

@Component({
  selector: 'hero-anim',
  standalone: true,
  template: `<ngt-canvas [sceneGraph]="Scene" />`,
  imports: [NgtCanvas],
})
export class HeroAnimComponent {
  readonly Scene = Scene;
}
