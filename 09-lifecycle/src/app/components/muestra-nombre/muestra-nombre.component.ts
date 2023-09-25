import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-muestra-nombre',
  templateUrl: './muestra-nombre.component.html',
  styleUrls: ['./muestra-nombre.component.css']
})
export class MuestraNombreComponent implements OnChanges{

  @Input('nombre') nombre = '';

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

}
