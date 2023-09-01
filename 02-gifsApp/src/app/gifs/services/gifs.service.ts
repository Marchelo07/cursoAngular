import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { query } from '@angular/animations';
import { Gif, SearchGifsResponse } from '../interface/gif.interface';

@Injectable({
  providedIn: 'root'  //le permite globalizar al servicio para poder utilizarlo desde cualquier lugar
})
export class GifsService {

  private apiKey: string = "DntqlPRViem3cwnd0JhZkHXCPNUyq0jj";
  private urlServicioGifs: string = "https://api.giphy.com/v1/gifs";
  private _historial: string[] = [];
  public resultados: Gif[] = [];

  constructor(
    private http: HttpClient
  ) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }

  get historial() {
    //Rompemos la referencia para el array original, ... retorna un nuevo arrary
    return [...this._historial];
  }

  buscar(textSearch: string) {

    textSearch = textSearch.trim().toLocaleLowerCase();

    if (!this._historial.includes(textSearch)) {
      this._historial.unshift(textSearch);
      this._historial = this._historial.splice(0, 10);

      localStorage.setItem('historial', JSON.stringify(this._historial))
    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', textSearch);

    this.http.get<SearchGifsResponse>(`${this.urlServicioGifs}/search`, { params })
      .subscribe(response => {
        this.resultados = response.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
      })
  }
}
