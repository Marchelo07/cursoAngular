import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {

  @Input() placeholder: string = "";
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  termino: string = '';
  debouncer: Subject<string> = new Subject();

  ngOnInit() {
    //se dispara una unica vez
    this.debouncer
      //pipe realiza acciones tara realizar algo con la informacion que se va a presentar, se realiza una espera 300 milisegundos
      .pipe(debounceTime(300))
      .subscribe(valor => {
        console.log("Debouncer:", valor);
        this.onDebounce.emit(valor)
      });
  }

  buscar() {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada(texto: any) {
    //se puede trabajar de las dos manera para obtener el valor, 
    //la variable termino ya esta refereciado
    const valor = texto.target.value;
    // console.log(valor);
    // console.log(this.termino);
    this.debouncer.next(this.termino);
  }

}
