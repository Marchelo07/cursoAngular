import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
})
export class ResultadosComponent {

  constructor(
    private gifService : GifsService
  ){}

  get resultados(){
    return this.gifService.resultados;
  }
}
