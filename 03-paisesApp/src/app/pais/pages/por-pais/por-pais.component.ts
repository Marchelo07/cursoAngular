import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paisList: Country[] = [];
  paisesSugeridos: Country[] = [];
  txtPlaceHolder: string = "Buscar país";
  mostrarSugeridos: boolean = false;

  constructor(
    private paisService: PaisService
  ) { }

  buscar(termino: string) {
    this.mostrarSugeridos = false;
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPais(this.termino).subscribe(data => {
      console.log(data);
      this.paisList = data;
    }, error => {
      this.hayError = true;
      this.paisList = [];
    });
  }


  sugerencias(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugeridos = true;
    this.paisService.buscarPais(termino).subscribe(paises => {
      this.paisesSugeridos = paises.splice(0, 5);
    }, error => {
      this.paisesSugeridos = [];
    });
  }

  buscarSugerido(termino: string) {
    this.buscar(termino);
  }
}
