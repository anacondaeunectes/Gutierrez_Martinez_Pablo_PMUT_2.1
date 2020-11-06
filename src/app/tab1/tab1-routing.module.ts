import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Contacto } from './contacto/contacto.model';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path:'/contacto/:contacto.nombre',
    component: Contacto
  },
  {
    path: 'han-solo',
    loadChildren: () => import('./pages/han-solo/han-solo.module').then( m => m.HanSoloPageModule)
  },
  {
    path: 'leia',
    loadChildren: () => import('./pages/leia/leia.module').then( m => m.LeiaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
