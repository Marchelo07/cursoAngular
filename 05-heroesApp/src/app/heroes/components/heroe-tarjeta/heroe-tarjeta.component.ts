import { Component, Input } from '@angular/core';
import { Heroe } from '../../interfaces/herores.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent {

  @Input('heroe') heroe!: Heroe; // ! para que permita que confie en que si va a venir un hereo

}
