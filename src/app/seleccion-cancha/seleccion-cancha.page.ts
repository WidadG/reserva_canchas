import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seleccion-cancha',
  templateUrl: './seleccion-cancha.page.html',
  styleUrls: ['./seleccion-cancha.page.scss'],
})
export class SeleccionCanchaPage implements OnInit {
  deporteSeleccionado: string = "";
  canchaSeleccionada: string = "";
  constructor(private router: Router) { }

  
  ngOnInit() {
  }

  guardarInformacion() {

    localStorage.setItem('deporteSeleccionado', this.deporteSeleccionado);
    localStorage.setItem('canchaSeleccionada', this.canchaSeleccionada);

    this.router.navigate(['/resumen']);
  }
}
