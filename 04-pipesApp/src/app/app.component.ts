import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private primeNGConfig: PrimeNGConfig) { }

  ngOnInit() {
    //Para tener efecto de burbuja en componente Fielset (Pantall pipes no comunes)
    this.primeNGConfig.ripple = true;
  }

  // title = 'pipesApp';

  // nombre: string = 'marcelo rosero';
  // valor :number = 1000;
  // obj = {
  //   "nombre": "marcelo"
  // }

  // mostrarNombre() {
  // }

}
