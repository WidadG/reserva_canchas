import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nombreUser: string = "";

  constructor(private router: Router) {}

  guardarNombre(){
    localStorage.setItem('nombreUsuario', this.nombreUser);

    this.router.navigate(['/seleccion-cancha']);
  }
}
