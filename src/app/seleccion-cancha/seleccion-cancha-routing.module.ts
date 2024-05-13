import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeleccionCanchaPage } from './seleccion-cancha.page';

const routes: Routes = [
  {
    path: '',
    component: SeleccionCanchaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeleccionCanchaPageRoutingModule {}
