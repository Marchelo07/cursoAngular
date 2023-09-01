import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'vuelaPipe'
})
export class vuelaPipe implements PipeTransform {

    transform(value: boolean) {
        return value ? 'vuela' : 'no vuela';
    }
}