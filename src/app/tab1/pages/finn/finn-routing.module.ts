import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinnPage } from './finn.page';

const routes: Routes = [
  {
    path: '',
    component: FinnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinnPageRoutingModule {}
