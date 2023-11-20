import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { extend } from 'angular-three';
import {
  AmbientLight,
  BoxGeometry,
  Mesh,
  MeshStandardMaterial,
  PointLight,
} from 'three';

extend({ Mesh, MeshStandardMaterial, BoxGeometry, AmbientLight, PointLight });

@Component({
  selector: 'demo-cube',
  standalone: true,
  template: `
    <ngt-mesh
      [position]="position"
      [scale]="active ? 1.5 : 1"
      (click)="active = !active"
      (pointerover)="hovered = true"
      (pointerout)="hovered = false"
      (beforeRender)="onBeforeRender($any($event).object)"
    >
      <ngt-box-geometry />
      <ngt-mesh-standard-material [color]="hovered ? 'darkred' : 'orange'" />
    </ngt-mesh>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Cube {
  @Input() position = [0, 0, 0];

  hovered = false;
  active = false;

  onBeforeRender(cube: Mesh) {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
  }
}

@Component({
  standalone: true,
  template: `
    <ngt-ambient-light />
    <ngt-point-light position="10" />
    <demo-cube [position]="[1.5, 0, 0]" />
    <demo-cube [position]="[-1.5, 0, 0]" />
  `,
  imports: [Cube],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Scene {}
