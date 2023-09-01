import { Directive, Input } from "@angular/core";
import { Validator, FormControl, NG_VALIDATORS } from '@angular/forms';

//Se debe decarar la directiva en el Module (teamplate.module), para poder utilizarla
@Directive({
    /*custom min es el nombre de la directiva que angular va a buscar para aplicarle, pero que el componente
    (inpu, etc) sea de tipo ngModel*/
    selector : '[customMin][ngModel]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: CustomMinDirective,
        multi: true
    }]
})
//Se implementa Validator para que se pueda extender al html para que pueda se utilizado
//como por ejecmplo el required
export class CustomMinDirective implements Validator{

    @Input('minimo') minimo!: number;

    constructor(){
        console.log(this.minimo)
    }

    /*control es el valor que tiene el "input"- del formControl*/
    validate( control: FormControl){
        const inputValue = control.value;
        return (inputValue < this.minimo)
        ? {'customMin': true}
        : null; //null retorna si es que cumplio con la condicion
    }

}