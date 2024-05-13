import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeleccionCanchaPageRoutingModule } from './seleccion-cancha-routing.module';

import { SeleccionCanchaPage } from './seleccion-cancha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeleccionCanchaPageRoutingModule
  ],
  declarations: [SeleccionCanchaPage]
})
export class SeleccionCanchaPageModule {}
