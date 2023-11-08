import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environments';
import { AuthRespose, Usuario } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _usuario!: Usuario;

  get usuario() {
    return { ...this._usuario }
  }

  constructor(
    private http: HttpClient
  ) { }

  login(email: string, password: string) {
    const url = `${this.baseUrl}/auth`;
    const body = { email, password };

    //no disparamos el observable para poder dispararlo desde otro lado
    /*Los operadores se ejecutan en cascada y cada uno de ellos lo pasa al siguiente
    tap sirve para poder hacer algo con la informacion antes de procesarla el siguiente operador (map)*/
    return this.http.post<AuthRespose>(url, body)
      .pipe(
        tap(resp => { //Capturamos la informacion del usuario
          if (resp.ok) {
            //Almacenamos el token en el local
            localStorage.setItem('token', resp.token!);
            //Se comenta ya que tenemos el renew del token que siempre se ejecuta cuando pasa por el wuard
            // this._usuario = {
            //   name: resp.name!, //colocamos el ! para decir typeScript que estamos seguros que va a venir la informacion en cada propiedad
            //   uid: resp.uid!,              
            //   email: resp.email!,
            // }
          }
        }),
        map(resp => resp.ok),
        catchError(err => of(err.error.msg)) //of para transformar en un observable, capturamos el error cuando ingresa mal el password o el email
      )
  }

  validarToken(): Observable<boolean> {
    const url = `${this.baseUrl}/auth/renew`;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || ''); // si el token es null envio vacio

    return this.http.get<AuthRespose>(url, { headers })
      .pipe(
        map(resp => {

          localStorage.setItem('token', resp.token!);
          this._usuario = {
            name: resp.name!, //colocamos el ! para decir typeScript que estamos seguros que va a venir la informacion en cada propiedad
            uid: resp.uid!,
            email: resp.email!
          }

          return resp.ok;
        }),
        catchError(err => of(false))
      )
  }

  logout() {
    // localStorage.removeItem('token');
    localStorage.clear();
  }

  registroUsuario(name: string, email: string, password: string) {
    const url = `${this.baseUrl}/auth/new`
    const body = { name, email, password};

    return this.http.post<AuthRespose>(url, body)
    .pipe(
      tap(resp=>{
        if(resp.ok){
          localStorage.setItem('token', resp.token!);          
        }
      }),
      map(resp => resp.ok),
      catchError(err=> of(err.error.msg))
    )
  }

}
