import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', loadChildren: () => import('./app.component').then(m => m.AppComponent)},
    {path: 'home', loadChildren: () => import('./app.component').then(m => m.AppComponent)},
];
