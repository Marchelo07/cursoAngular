import { FormControl } from '@angular/forms';

/* + significa que puede cualquier cantidad de caracteres */
export const nombreApellidoPattern: string = "([a-zA-Z]+) ([a-zA-Z]+)";
// Expresion regular para validar un correo correcto
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

//Validador personalizado
export const validadorUsername = (control: FormControl) => {
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