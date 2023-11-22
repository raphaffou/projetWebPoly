import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as THREE from 'three'; // base version : 0.106.2  | v0.110.0 works
import { gsap } from "gsap";

@Component({
  selector: 'hero-anim',
  standalone : true,
  imports : [CommonModule],
  templateUrl: './hero-anim.component.html',
  styleUrl: './hero-anim.component.css'
})
export class HeroAnimComponent implements OnInit{
  ngOnInit() {
    const scene = new THREE.Scene();

    const partCnt = 1000;
    const posArray = new Float32Array(partCnt * 3);
    for (let i = 0; i < partCnt * 3; i++) {
      posArray[i] = Math.random() * 5 * (Math.random() - 0.5);
    }
    const partGeo = new THREE.BufferGeometry();
    partGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const geometry = new THREE.SphereGeometry(0.5, 64, 64);
    const material = new THREE.PointsMaterial({ size: 0.005 });
    const particulematerial = new THREE.PointsMaterial({
      size: 0.005,
      blending: THREE.AdditiveBlending,
      transparent: true,
      sizeAttenuation: true,
    });
    const sphere = new THREE.Points(geometry, material);
    const partMesh = new THREE.Points(partGeo, particulematerial);
    scene.add(sphere, partMesh);

    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    window.addEventListener('resize', () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 2;
    scene.add(camera);

    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector('#hero-canvas')!,
      alpha: true,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    document.querySelector('#container')!.appendChild(renderer.domElement);

    document.addEventListener('mousemove', onDocumentMouseMove);

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    var halfX = window.innerWidth / 2;
    var halfY = window.innerHeight / 2;
    var zoom = false;

    function onDocumentMouseMove(event:any) {
      mouseX = event.clientX - halfX;
      mouseY = event.clientY - halfY;
      zoom = true;
    }

    document.addEventListener('mouseout', () => {
      zoom = false;
    });

    function resizeCanvasToDisplaySize() {
      const canvas = renderer.domElement;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      if (canvas.width !== width || canvas.height !== height) {
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      }
    }

    
    const clock = new THREE.Clock();
    const tick = () => {
      targetX = mouseX * 0.001;
      targetY = mouseY * 0.001;

      resizeCanvasToDisplaySize();

      const elapsedTime = clock.getElapsedTime();

      sphere.rotation.y = 0.5 * elapsedTime;
      partMesh.rotation.y += 0.05 * (targetX - partMesh.rotation.y);
      if (zoom) {
        gsap.timeline({ defaults: { duration: 1.5, ease: "expo.out"}})
            .to(sphere.position, { x:0, y:0, z:5 },0)
            .to(sphere.position, { x:0, y:0, z:0 },0);
      }
      if (!zoom) {
        gsap.to(sphere.position, {duration: 1, x: 0, y: 0, z: 0});
      }

      renderer.render(scene, camera);
      window.requestAnimationFrame(tick);
    };
    tick();
  }
}
