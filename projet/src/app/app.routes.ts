import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeroComponent } from './hero-anim/hero-anim.component';
import { StoryComponent } from './story/story.component';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HeroComponent},
    { path: 'story', component: StoryComponent},
    { path: 'shop', component: ShopComponent},
    { path: 'cart', component: CartComponent},
    { path: '**', title:'404', component: PageNotFoundComponent }, // Wildcard route for a 404 page
];
