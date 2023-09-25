import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  /* + significa que puede cualquier cantidad de caracteres */
  public nombreApellidoPattern: string = "([a-zA-Z]+) ([a-zA-Z]+)";
  // Expresion regular para validar un correo correcto
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }

  validadorUsername(control: FormControl): ValidationErrors | null {
    const username: string = control.value?.trim().toLowerCase();
    console.log(username)
    if (username === 'strider') {
      // Return ERROR;
      //Sebe retornar siempre un objeto cuando es un error
      return {
        noStrider: true
      }
    }
    // Cuando se retorna null quiere decir que la validacion es correcta y puede regsitrar el usuario
    return null;
  }

  //Funcion debe retornar una funcion, ya que son validaciones y debe recibir una funcion
  camposIuales(campo1: string, campo2: string) {

    return (formGroup: AbstractControl): ValidationErrors | null => {

      const pass1 = formGroup.get(campo1)?.value;
      const pass2 = formGroup.get(campo2)?.value;

      if (pass1 !== pass2) {
        /* Se puede pasar errores por referencia a travez del campo2 que es el password2 y se le envia el error de que no son iguales,
        si es que cambia alguno de los dos controles */
        formGroup.get(campo2)?.setErrors({ noIguales: true })
        return { noIguales: true }
      }
      //si es que las contraseñas coinciden limpiamos las validacion del campo 2
      formGroup.get(campo2)?.setErrors(null);
      return null;
    }
  }
}
