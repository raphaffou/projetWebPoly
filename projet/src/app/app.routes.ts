import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeroComponent } from './hero-anim/hero-anim.component';

export const routes: Routes = [
    { path: 'home', component: HeroComponent},
    { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
    { path: '**', title:'404', component: PageNotFoundComponent }, // Wildcard route for a 404 page
];
