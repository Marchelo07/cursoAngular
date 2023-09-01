import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { Auth } from '../interfaces/auth.interfaces';
import { tap, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _auth: Auth | undefined;

  //genero un get para obetener desde cualquier parte del proyecto
  get auth(): Auth {
    return { ...this._auth! };
  }

  constructor(
    private http: HttpClient
  ) { }

  /* Se utiliza el tap para obtener la authenticacion antes de que le devuelva el subcribe del login
  y asi podemos utilizar la infomacion del usuario dentro de servicio*/
  login() {
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
      .pipe(
        tap(auth => this._auth = auth),
        tap(auth => localStorage.setItem('token', auth.id))
      );
  }

  logout() {
    console.log("cerrando session")
    localStorage.removeItem('token');  
    this._auth = undefined;
  }

  verificarAutenticacion(): Observable<boolean> {
    if (!localStorage.getItem('token')) {
      return of(false);
    }

    /* map: sirve para modificar la data o procesar y devolver otra cosa*/
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
      .pipe(
        map(
          (auth) => {
            console.log("map", auth);
            this._auth = auth;
            return true;
          }
        )
      );
  }

}
