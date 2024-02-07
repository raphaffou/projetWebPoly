import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as THREE from 'three'; // base version : 0.106.2  | v0.110.0 works
import { gsap } from "gsap";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { HeaderComponent } from '../components/header/header.component';


@Component({
  selector: 'hero',
  standalone : true,
  imports : [CommonModule, HeaderComponent],
  templateUrl: './hero-anim.component.html',
  styleUrl: './hero-anim.component.scss'
})
export class HeroComponent implements OnInit{
  ngOnInit() {
    const scene = new THREE.Scene();
    var container = document.querySelector('#container')!;
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };


    //--------------------- LIGHTS ---------------------
    const ambientLight = new THREE.AmbientLight(0x404040,100);
    scene.add(ambientLight);

    //const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    //scene.add(directionalLight);


    // --------------------- RENDERER ---------------------
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector('#hero-canvas')!,
      alpha: true,
      antialias: true,
      precision: "highp",
      powerPreference: "high-performance"
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;

    container.appendChild(renderer.domElement);


    // --------------------- CAMERA ---------------------
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


    // --------------------- RESIZE ---------------------
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

    window.addEventListener('resize', () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
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

    /*
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.125;
    */


    // --------------------- OBJECTS ---------------------
    //const loader = new GLTFLoader();  // uncompressed glb
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('../assets/draco/');

    const loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);


     loader.load('../assets/creme_compressed.glb', 
      function (gltf:any) {
        gltf.scene.rotation.x = 1.2*Math.PI/2;
        gltf.scene.rotation.y = Math.PI/4;
        gltf.scene.rotation.z = Math.PI/4;
        scene.add(gltf.scene);
      }, 
      function (xhr) {
        console.log((xhr.loaded/xhr.total * 100) + '% loaded'); 
      }, 
      function (error:any) {
       console.error(error);
      } 
    );

    /*
import * as dat from 'dat.gui';

// ...

let params = {
  rotationX: 1.2 * Math.PI / 2,
  rotationY: Math.PI / 4,
  rotationZ: Math.PI / 4,
};

let gui = new dat.GUI();

gui.add(params, 'rotationX', 0, Math.PI * 2).onChange(updateModelRotation);
gui.add(params, 'rotationY', 0, Math.PI * 2).onChange(updateModelRotation);
gui.add(params, 'rotationZ', 0, Math.PI * 2).onChange(updateModelRotation);

let model;

loader.load('../assets/creme_compressed.glb', 
  function (gltf:any) {
    model = gltf.scene;
    scene.add(model);
    updateModelRotation();
  }, 
  function (xhr) {
    console.log((xhr.loaded/xhr.total * 100) + '% loaded'); 
  }, 
  function (error:any) {
   console.error(error);
  } 
);

function updateModelRotation() {
  if (model) {
    model.rotation.x = params.rotationX;
    model.rotation.y = params.rotationY;
    model.rotation.z = params.rotationZ;
  }
}

    */


    // --------------------- ANIMATION ---------------------
    function animate() {
      targetX = mouseX * 0.001;
      targetY = mouseY * 0.001;

      resizeCanvasToDisplaySize();

      /*
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
      */

      //controls.update();
      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    };
    animate();
  }
}
