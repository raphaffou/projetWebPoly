import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as THREE from 'three'; // base version : 0.106.2  | v0.110.0 works
import { gsap } from "gsap";
import SplineLoader from '@splinetool/loader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

@Component({
  selector: 'hero-anim',
  standalone : true,
  imports : [CommonModule],
  templateUrl: './hero-anim.component.html',
  styleUrl: './hero-anim.component.scss'
})
export class HeroAnimComponent implements OnInit{
  ngOnInit() {
    const scene = new THREE.Scene();
    const clock = new THREE.Clock();
    var color = new THREE.Color(0x000000);
    var container = document.querySelector('#container')!;

    // const partCnt = 1000;
    // const posArray = new Float32Array(partCnt * 3);
    // for (let i = 0; i < partCnt * 3; i++) {
    //   posArray[i] = Math.random() * 5 * (Math.random() - 0.5);
    // }
    // const partGeo = new THREE.BufferGeometry();
    // partGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    // const geometry = new THREE.SphereGeometry(0.5, 64, 64);
    // const material = new THREE.PointsMaterial({ 
    //   color : color, 
    //   size: 0.005 
    // });
    // const particulematerial = new THREE.PointsMaterial({
    //   color : color,
    //   size: 0.005,
    //   blending: THREE.AdditiveBlending,
    //   transparent: true,
    //   sizeAttenuation: true,
    // });
    // const sphere = new THREE.Points(geometry, material);
    // const partMesh = new THREE.Points(partGeo, particulematerial);
    // scene.add(sphere, partMesh);


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
      antialias: true
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;



    container.appendChild(renderer.domElement);

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    var halfX = window.innerWidth / 2;
    var halfY = window.innerHeight / 2;

    container.addEventListener('mousemove', (e:any) => {mouseX = e.clientX - halfX; mouseY = e.clientY - halfY;});
    
    var zoom = false;
    container.addEventListener('mouseenter', () => { 
      zoom = true;
    });
    container.addEventListener('mouseleave', () => {
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


    // const loader = new SplineLoader();
    // loader.load(
    //   'https://prod.spline.design/vxvf69Ij5w2ze9OD/scene.splinecode',
    //   (splineScene) => {
    //     scene.add(splineScene);
    //   }
    // );
    // const controls = new OrbitControls(camera, renderer.domElement);
    // controls.enableDamping = true;
    // controls.dampingFactor = 0.125;

    const loader = new GLTFLoader();

    loader.load( '../assets/short_hand_cream_copy.glb', function ( gltf:any ) {
    
      scene.add( gltf.scene );
    
    }, undefined, function ( error:any ) {
    
      console.error( error );
    
    } );



    const tick = () => {
      targetX = mouseX * 0.001;
      targetY = mouseY * 0.001;

      resizeCanvasToDisplaySize();

      const elapsedTime = clock.getElapsedTime();

      // sphere.rotation.y = 0.5 * elapsedTime;
      // partMesh.rotation.y += 0.05 * (targetX - partMesh.rotation.y);
      // if (zoom) {
      //   gsap.timeline({ defaults: { duration: 1.5, ease: "expo.out"}})
      //       .to(sphere.position, { x:0, y:0, z:5 },0)
      //       .to(sphere.position, { x:0, y:0, z:0 },0);
      // }
      // if (!zoom) {
      //   gsap.to(sphere.position, {duration: 1, x: 0, y: 0, z: 0});
      // }

      renderer.render(scene, camera);
      window.requestAnimationFrame(tick);
    };
    tick();
  }
}




