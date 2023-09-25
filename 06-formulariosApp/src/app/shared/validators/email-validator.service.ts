import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {

  constructor(
    private http: HttpClient
  ) { }

  validate(control: AbstractControl<any, any>): Observable<ValidationErrors | null> {

    const email = control.value;
    console.log(email);

    /* Se realiza un map para poder modificar y validar si el email ya esta usado,
    si devuelve algo el email ya existe, si retona vacio puede ser usado por eso retorna null */
    return this.http.get<any[]>(`http://localhost:3000/usuarios?q=${email}`)
      .pipe(
        delay(3000),//Simulamos que la respuesta llega despues de 3 segundos
        map(resp => {
          return (resp.length === 0) ? null : { emailTomado: true }
        })
      )
  }
  // registerOnValidatorChange?(fn: () => void): void {
  //   throw new Error('Method not implemented.');
  // }
}
