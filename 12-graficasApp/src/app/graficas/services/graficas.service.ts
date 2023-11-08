import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getUsuariosRedesSociales() {
    return this.httpClient.get('http://localhost:3000/grafica');
  }

  getUsuariosRedesSocialesData() {
    return this.getUsuariosRedesSociales()
      .pipe(
        delay(1500),
        map(data => {
          const labels = Object.keys(data);
          const values = Object.values(data);
          return { labels, values };
        })
      )
  }
}
