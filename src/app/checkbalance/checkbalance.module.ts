import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckbalancePageRoutingModule } from './checkbalance-routing.module';

import { CheckbalancePage } from './checkbalance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckbalancePageRoutingModule
  ],
  declarations: [CheckbalancePage]
})
export class CheckbalancePageModule {}
