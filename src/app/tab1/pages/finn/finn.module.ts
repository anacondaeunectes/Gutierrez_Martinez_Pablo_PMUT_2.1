import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinnPageRoutingModule } from './finn-routing.module';

import { FinnPage } from './finn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinnPageRoutingModule
  ],
  declarations: [FinnPage]
})
export class FinnPageModule {}
