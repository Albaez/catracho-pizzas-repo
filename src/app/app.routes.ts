import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'product-card',
    loadComponent: () => import('./product-card/product-card.component').then( m => m.ProductCardComponent)
  },
  {
    path: '',
    redirectTo: 'product-card',
    pathMatch: 'full',
  },

];
