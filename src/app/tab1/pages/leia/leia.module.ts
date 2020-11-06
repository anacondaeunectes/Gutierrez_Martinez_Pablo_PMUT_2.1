import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeiaPageRoutingModule } from './leia-routing.module';

import { LeiaPage } from './leia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeiaPageRoutingModule
  ],
  declarations: [LeiaPage]
})
export class LeiaPageModule {}
