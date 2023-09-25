import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, combineLatest, of, retry } from 'rxjs';
import { Pais, PaisSmall } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private _regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  private baseUrl: string = 'https://restcountries.com/v3.1';


  get regiones(): string[] {
    return [...this._regiones];
  }

  constructor(
    private http: HttpClient
  ) { }

  getPaisesPorRegion(region: string): Observable<PaisSmall[]> {
    const url: string = `${this.baseUrl}/region/${region}?fields=name,cca3`;
    return this.http.get<PaisSmall[]>(url);
  }

  getPaisPorCodigo(codigo: string): Observable<Pais[] | null> {
    //validacin si es que no se envia el codigo
    if (!codigo) {
      return of(null);
    }
    const url = `${this.baseUrl}/alpha/${codigo}`;
    return this.http.get<Pais[]>(url);
  }

  getPaisPorCodigoSmall(codigo: string): Observable<PaisSmall> {
    const url = `${this.baseUrl}/alpha/${codigo}?fields=name,cca3`;
    return this.http.get<PaisSmall>(url);
  }

  //Api para consultar varias peticiones simultaneas
  getPaisesPorCodigos(borders : string[]):Observable<PaisSmall[]>{
    if(!borders){
      return of([]);
    }
    //Me creo una lista de peticiones, que van a emitir un PaisSmall
    const peticiones : Observable<PaisSmall>[] = [];
    borders.forEach(codigo =>{
      //NOTA: Para que un observable sea disparado, necesita el subcribe
      const peticion = this.getPaisPorCodigoSmall(codigo);
      peticiones.push(peticion);
    });

    //para disparar toda las peticiones que se tiene en el arreglo,
    //el comibeLatet tiene una peticion que contiene todas las peticiones internas (las del arreglo)
    return combineLatest(peticiones);
  }
}
