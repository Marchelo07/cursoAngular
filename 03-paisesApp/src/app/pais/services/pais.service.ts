import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = "https://restcountries.com/v3.1";
  constructor(
    private http: HttpClient
  ) { }

  get getHttParams() {
    return new HttpParams().set('fields', 'name,capital,flags,population,cca2');
  }


  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url, { params: this.getHttParams });
  }

  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url, { params: this.getHttParams });
  }

  getPaisPorAlpha(id: string): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  getPaisesPorRegion(region: string): Observable<Country[]> {
    const httpParams = new HttpParams()
      .set('fields', 'name,capital,flags,population,alphaCode2');

    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url, { params: this.getHttParams })
      .pipe(
        tap(console.log)
      );
  }
}
