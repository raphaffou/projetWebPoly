import { Component, LOCALE_ID, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { RouterOutlet, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { HeroComponent } from './hero-anim/hero-anim.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

registerLocaleData(localeFr);

@Component({
  selector: 'app',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, HeroComponent, PageNotFoundComponent],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'},
    
  ]
})
export class AppComponent {
  title = 'Nyxen';
}
