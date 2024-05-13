import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.page.html',
  styleUrls: ['./resumen.page.scss'],
})
export class ResumenPage implements OnInit {
   
  nombre: string = "";
  deporte: string= "";
  cancha: string = "";

  constructor() {
     localStorage.getItem('nombreUsuario'); // Error de tipo, falta tiempo para solucionar (se debe incorporar this.nombre)
     localStorage.getItem('deporteSeleccionado'); // Error de tipo, falta tiempo para solucionar (se debe incorporar this.deporte)
     localStorage.getItem('canchaSeleccionada'); // Error de tipo, falta tiempo para solucionar (se debe incorporar this.cancha)
  }
   verInformacion(){ // Se crea este metodo para poder ver información por consola
    console.log(localStorage.getItem("nombreUsuario"));
    console.log(localStorage.getItem("deporteSeleccionado"));
    console.log(localStorage.getItem("canchaSeleccionada"));
   }

  ngOnInit() {
  }

}
