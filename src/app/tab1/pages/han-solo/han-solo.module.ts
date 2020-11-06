import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HanSoloPageRoutingModule } from './han-solo-routing.module';

import { HanSoloPage } from './han-solo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HanSoloPageRoutingModule
  ],
  declarations: [HanSoloPage]
})
export class HanSoloPageModule {}
