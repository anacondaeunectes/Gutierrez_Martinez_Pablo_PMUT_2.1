import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Contacto } from './contacto/contacto.model';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  // {
  //   path:'/contacto/:contacto.nombre',
  //   component: Contacto
  // },
  {
    path: 'han',
    loadChildren: () => import('./pages/han-solo/han-solo.module').then( m => m.HanSoloPageModule)
  },
  {
    path: 'leia',
    loadChildren: () => import('./pages/leia/leia.module').then( m => m.LeiaPageModule)
  },
  {
    path: 'rey',
    loadChildren: () => import('./pages/rey/rey.module').then( m => m.ReyPageModule)
  },
  {
    path: 'finn',
    loadChildren: () => import('./pages/finn/finn.module').then( m => m.FinnPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
