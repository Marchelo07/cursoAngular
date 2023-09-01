import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  constructor(
    private dbzService : DbzService
  ) { }

  @Input() nuevoPersonaje: Personaje = {
    nombre: '',
    poder: 0
  };
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();


  agregar() {
    console.log(this.nuevoPersonaje);

    // this.onNuevoPersonaje.emit(this.nuevoPersonaje);
    this.dbzService.agregarPersonaje(this.nuevoPersonaje);

    this.nuevoPersonaje = {
      nombre: '',
      poder: 0
    }
  }
}
