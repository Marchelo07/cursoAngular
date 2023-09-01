import { Component } from '@angular/core'

@Component({
    selector: 'app-contador',
    template: `<span>{{title}}</span><br><br>
    <span>La base es de: <strong>{{base}}</strong></span> <br><br>
    <button (click)="acumular(+ base)"> + {{base}}</button>
    <span> {{ numero }}</span>
    <button (click)="acumular(- base) "> - {{base}}</button>`
})
export class ContadorComponent {

    title = 'Contador';

    numero: number = 0;
    base: number = 5;

    acumular(numero: number) {
        this.numero += numero;
    }


}