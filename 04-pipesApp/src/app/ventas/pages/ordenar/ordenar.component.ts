import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent {

  change: boolean = false;
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    }, {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    }, {
      nombre: 'Robin',
      vuela: false,
      color: Color.negro
    },{
      nombre: 'Dark Devil',
      vuela: false,
      color: Color.rojo
    }
  ];

  ordenarPor: string = '';

  cambiarMayusculas() {
    this.change = !this.change;
  }

  ordenarPorFunction(valueOrdenar: string) {
    this.ordenarPor = valueOrdenar;
  }

}
