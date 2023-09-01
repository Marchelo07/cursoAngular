import { Component, ViewChild, ElementRef } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent {

  // !  para afirmar que el objeto no va hacer null. Se define el tipo HtmlInput
  //Para poder manipular la caja de texto
  @ViewChild('textBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor(
    private gifsService: GifsService
  ) { }


  buscar() {
    const valor = this.txtBuscar.nativeElement.value;
    
    if(valor.trim().length === 0){
      return;
    }
    this.gifsService.buscar(valor);
    this.txtBuscar.nativeElement.value = '';
  }

}
