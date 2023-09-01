import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'mayusculas', //nombre del pipe con el que vamos a utilizar

})
export class MayusculasPipe implements PipeTransform {

    transform(value: string, enMayusculas: boolean = false): string {
        return (enMayusculas) ? value.toUpperCase() : value.toLowerCase();
    }

}