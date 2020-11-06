import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HanSoloPage } from './han-solo.page';

const routes: Routes = [
  {
    path: '',
    component: HanSoloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HanSoloPageRoutingModule {}
