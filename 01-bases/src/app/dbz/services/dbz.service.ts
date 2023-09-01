import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {

    constructor() { }

    private _listaPersonajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 15000
        }, {
            nombre: 'Vegeta',
            poder: 14000
        }
    ];

    get personajes(): Personaje[] {
        //  ...  rompe la referencia del objeto
        return [...this._listaPersonajes];
    }

    agregarPersonaje(personaje: Personaje) {
        this._listaPersonajes.push(personaje);
    }
}