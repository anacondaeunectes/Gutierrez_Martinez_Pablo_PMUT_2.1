import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReyPage } from './rey.page';

const routes: Routes = [
  {
    path: '',
    component: ReyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReyPageRoutingModule {}
