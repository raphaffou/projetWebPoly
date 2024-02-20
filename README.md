# projetWebPoly
Le projet du cours web de chez polytech paris saclay

Prérequis :
- node 21.0.0
- npm 10.2.0

## Setup
npm version : 10.1.0  

npm install -g @angular/cli  
npm install gsap  
npm install three  
npm i --save-dev @types/three  
npm install three-stdlib  
npm i @spline/loader  
- Backend : 
      - `npm install express typescript ts-node @types/node @types/express --save-dev`
      - `npm install mariadb`


Front TODO :
- [ ] Shop pages perf (https://developer.chrome.com/docs/lighthouse/performance/mainthread-work-breakdown/?utm_source=lighthouse&utm_medium=devtools | resize images, )
- [ ] Story Page
- [ ] Login Page
- [ ] Animation plays once at load ???
- [ ] Make the fitlers work in shop
- [x] Cart Page
- [x] GENERATE PAGES FOR EACH PRODUCT
- [x] Shop Page
- [x] Responsive Cart
- [x] Notification on cart if items in it
- [x] Put the blob at the right place + right colours
- [x] Animate only on mouseover object
- [x] Use pointermove instead of mousemove
- [x] Mobile version of homepage (mostly)


**Design :**
<https://www.figma.com/file/IyzCuuXuzRHhmPcgKNFIsf/Projet-Web-APP3?type=design&node-id=0%3A1&mode=design&t=xyl50WpWNm5dfTto-1>

### Sujet du site :
- jeux (UE Initiative)
- product page (ring, …)
- plant knowledge app
- <https://blog.gaetanpautler.com/weekly-links-and-websites/502> (to find inspiration)
- poterie

=> Shopping site for creams, oils, cosmetics, etc… (<https://sephora.com>)with a 3D model of the product, and a 3D model of the product in a room (like a ring on a finger, a chair in a room, etc…). The user can interact with the model (rotate, zoom, etc)


### Technologies :
- [Angular](#angular)   
- Spline + ThreeJS (+ GSAP ?)
- preprocesseur CSS ?
- Bootstrap
- [NodeJS](#nodejs) -> utilisation de bdd avec, un système d’upload (des fichiers obj à mettre dans threeJS depuis d’interface jsp) etc… ?
- [Figma (design)](https://www.figma.com/file/IyzCuuXuzRHhmPcgKNFIsf/Untitled?type=design&node-id=0%3A1&mode=design&t=rqxShbZXRcXu3DL3-1)



### Features :
- sticky navbar that start with a solid color (rose pâle bonbon) then is transparent with blur and a lower opacity
- Paypal donation system
- img hover effect : <https://www.autexacoustics.com> 



### Examples :
- ThreeJS model interaction : <https://sra.kohler.com> 
- scroll triggers : <https://www.jeanpaulgaultier.com/fr/fr/fragrances/la-nouvelle-feminite-gaultier/le-parfum> 
- GSAP scroll trigger decompose : <https://codepen.io/GreenSock/pen/MWaWPmG>
- svg path animation : <https://codepen.io/creativeocean/pen/zYrPrgd>
- custom cursor : <https://sussextaps.com.au/> 
- neo-brutalism ThreeJS : <https://repeat.studiofreight.com/>
- INCREDIBLE ThreeJS example (bague): <https://webgi-jewelry.vercel.app/>
- similar website to ours : <https://stage-helias.myshopify.com/>
- animations : <https://www.danielroth.com/historical-models/>


### Angular
- Intro : <https://angular.io/guide/what-is-angular>
- Tuto : <https://angular.io/start>
- Local setup : <https://angular.io/guide/setup-local>


### NodeJS
- Tuto : <https://www.w3schools.com/nodejs/nodejs_intro.asp>

---
## Site design
- similar website to ours : <https://stage-helias.myshopify.com/>

### Ressources
- <https://www.awwwards.com/inspiration/consistant-3d-images-elementary> --> ![](https://assets.awwwards.com/awards/element/2023/07/64c7977047c70631166571.jpg)
- ![](https://assets.awwwards.com/awards/submissions/2019/07/5d2378f31ffb2988004784.png)
- ![](https://assets.awwwards.com/awards/external/2020/12/5fcf897cd3999409543069.jpg)
- ![](https://assets.awwwards.com/awards/submissions/2018/03/5aa791c5a56ba.jpg)


### Make ThreeJS Work
https://newscrewdriver.com/2023/04/06/angular-three-js-hello-world/
https://github.com/AxiomeCG/ng-three-starter-kit

https://stackblitz.com/edit/angular-threejs-demo-basic?file=src%2Fapp%2Fapp.component.ts

https://angular.io/guide/versions


### GSAP
Accesibility : https://youtu.be/9gipsKpWozE?si=nV82tWHzM-EMTXbG

### 3D Modeling
Luma AI's Genie  
Spline 3D  
https://www.turbosquid.com/Search/3D-Models/free/cosmetic-tube  

### 3D Model

https://optimizeglb.com/  

https://app.spline.design/file/f0780ea8-c5c2-467d-84dd-f10bcae43c85 (pot)  
https://app.spline.design/library/bb106a46-9df9-4486-9f6e-3d37b0d12d75 (long tube)  

https://www.turbosquid.com/3d-models/toy-cosmetic-bottles-3d-1944937  
https://www.turbosquid.com/3d-models/3d-cosmetics-bathroom-gold-model-1475772  
https://www.turbosquid.com/3d-models/3d-stylized-bathroom-items-freebie-free-free-lowpoly-3d-model-model-2006529    
https://www.turbosquid.com/3d-models/3d-laserautomaticpipecuttingmachine3ds-1738279   
https://www.turbosquid.com/fr/3d-models/cosmetic-tube-3d-model-1414639  (not free)  

#### Angular Routing
https://stackblitz.com/run?file=src%2Fapp%2Fapp.module.ts,src%2Fmain.ts,src%2Fapp%2Fapp-routing.module.ts,src%2Fapp%2Fapp.component.ts  
https://angular.io/guide/bootstrapping  
https://angular.io/tutorial/tour-of-heroes/toh-pt5  


https://stackoverflow.com/questions/51909800/how-to-navigate-to-other-page-in-angular-6 

https://stackblitz.com/run?file=src%2Fapp%2Fapp.component.html,src%2Fapp%2Fapp-routing.module.ts,src%2Fapp%2Fapp-routing.module.11.ts


## Questions
- SSR ?