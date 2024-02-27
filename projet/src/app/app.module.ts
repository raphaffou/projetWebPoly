import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../../environments/environment';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeroComponent } from './hero-anim/hero-anim.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';


import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { CartComponent } from './cart/cart.component';
import { ChevronDownComponent } from '../assets/chevron-down/chevron-down.component';
registerLocaleData(localeFr);

@NgModule({
  imports: [
    RouterModule,
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    HighlightModule,
    AuthModule.forRoot({
      ...env.auth,
      httpInterceptor: {
        ...env.httpInterceptor,
      },
    }),
    CommonModule,
    NgOptimizedImage,
    CommonModule, 
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HeroComponent,
    HeaderComponent,
    CartComponent,
    ChevronDownComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    },
    {
      provide: Window,
      useValue: window,
    },
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          json: () => import('highlight.js/lib/languages/json'),
        },
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
