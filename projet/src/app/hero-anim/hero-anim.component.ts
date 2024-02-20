import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import * as THREE from 'three'; // base version : 0.106.2  | v0.110.0 works
import { gsap } from "gsap";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { HeaderComponent } from '../header/header.component';
//import * as dat from 'dat.gui';
//import Stats from 'three/examples/jsm/libs/stats.module.js';

@Component({
  selector: 'hero',
  standalone: true,
  imports: [CommonModule, HeaderComponent, NgOptimizedImage],
  templateUrl: './hero-anim.component.html',
  styleUrl: './hero-anim.component.scss'
})
export class HeroComponent implements OnInit {
  ngOnInit() {
    const scene = new THREE.Scene();
    var container = document.querySelector('#container')!;
    const sizes = {
      width: container.clientWidth,
      height: container.clientHeight
    };

    let mouse = new THREE.Vector2(-1000000000, -10000000000); // init out of canvas to avoid raycaster bug
    let target = new THREE.Vector2(0, 0);
    let zoom = false;


    // const axesHelper = new THREE.AxesHelper(5);
    // const stats = new Stats();
    // document.body.appendChild(stats.dom);


    //--------------------- LIGHTS ---------------------
    const ambientLight = new THREE.AmbientLight(0x404040, 70);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
    directionalLight.position.set(-1, 0.2, .4);
    scene.add(directionalLight);


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


    // --------------------- OBJECTS ---------------------
    //const loader = new GLTFLoader();  // uncompressed glb
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('../assets/draco/');

    const loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);
    let model: any;

    loader.load('../assets/3dModels/cosmetics__skin_care_product_-_free.glb',
      function (gltf: any) {
        model = gltf.scene;
        animate();
        gltf.scene.rotation.y = Math.PI / 2;
        gltf.scene.scale.set(10, 10, 10);
        gltf.scene.position.set(0, -.15, 0);
        //gltf.scene.add(axesHelper);
        scene.add(gltf.scene);
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      },
      function (error: any) {
        console.error(error);
      }
    );


    // --------------------- RESIZE AND INTERACT ---------------------
    container.addEventListener('pointermove', (e:any) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    /*
    container.addEventListener('mouseenter', () => {
      zoom = true;
    });
    container.addEventListener('mouseleave', () => {
      zoom = false;
    });
    */

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


    // --------------------- ANIMATION ---------------------
    const raycaster = new THREE.Raycaster();

    mouse.set(-1000, -1000); // init out of canvas to avoid raycaster bug
    zoom = false;

    async function animate() {
      target.x = mouse.x * 0.001;
      target.y = mouse.y * 0.001;

      resizeCanvasToDisplaySize();

      raycaster.setFromCamera(mouse, camera);

      if(model){
        var intersects = raycaster.intersectObjects([model],true);
        zoom = intersects.length > 0;
      }

      if (zoom) {
        gsap.timeline({ defaults: { duration: 1.5, ease: "expo.out" } })
          .to(model.rotation, { duration: .75, x: -Math.PI / 16, y: Math.PI / 2 - Math.PI / 24, z: 0 })
          .to(model.scale, { duration: .75, x: 20, y: 20, z: 20 });
      }
      if (!zoom) {
        gsap.timeline({ defaults: { duration: 1.5, ease: "expo.out" } })
          .to(model.rotation, { duration: .75, x: 0, y: Math.PI / 2, z: 0 })
          .to(model.scale, { duration: .75, x: 10, y: 10, z: 10 });
      }

      // controls.update();
      // stats.update();
      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    };
  }
}
