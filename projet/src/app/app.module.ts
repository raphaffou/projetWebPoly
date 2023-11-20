import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroAnimComponent } from './hero-anim/hero-anim.component';
import { ScrollAnimComponent } from './scroll-anim/scroll-anim.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrollAnimComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroAnimComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
