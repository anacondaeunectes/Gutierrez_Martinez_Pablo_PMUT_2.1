import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeiaPage } from './leia.page';

const routes: Routes = [
  {
    path: '',
    component: LeiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeiaPageRoutingModule {}
