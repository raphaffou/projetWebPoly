import { Routes } from '@angular/router';
import { HeroAnimComponent } from './hero-anim/hero-anim.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: 'home', component: AppComponent },
    { path: 'hero-anim', component: HeroAnimComponent },
];
