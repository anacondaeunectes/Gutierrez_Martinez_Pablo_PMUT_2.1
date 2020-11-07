import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReyPageRoutingModule } from './rey-routing.module';

import { ReyPage } from './rey.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReyPageRoutingModule
  ],
  declarations: [ReyPage]
})
export class ReyPageModule {}
