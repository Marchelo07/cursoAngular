import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor(
    private dbzService: DbzService
  ) { }


  nuevoPersonaje: Personaje = {
    nombre: 'Crilin',
    poder: 200
  }


  // agregarNuevoPersonje(personaje: Personaje) {
  //   console.log("llego")
  //   this.listaPersonajes.push(personaje);
  // }
}

