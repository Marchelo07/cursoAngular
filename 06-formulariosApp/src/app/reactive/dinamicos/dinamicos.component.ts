import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent {

  miFormulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    nuevoFavorito: [],
    favoritos: this.fb.array([
      ['Metal Gear', Validators.required],
      ['Death Stranding', Validators.required]
    ], Validators.required) //Vaidator.required validacion que debe existir al menos uno en el array
  });

  //Creamos otro FormControles para poder agregar un nuevoFavorito, y podemos validar que sea requetido
  nuevoFavorito: FormControl = this.fb.control('', Validators.required);

  get favoritosArr() {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor(
    private fb: FormBuilder
  ) { }


  campoEsValido(campo: string) {
    return this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched;
  }

  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario);
  }

  agregarFavorito() {
    //Validacion para que no realice nada si intenta registrar
    if (this.nuevoFavorito.invalid) { return; }

    /*Si es valido es necesario agregar al formulario dentro de favoritos,
    se puede utilizar el get y hacer un push, gracias que que los objetos son de referencia y pueden cambiar*/
    //this.favoritosArr.push(new FormControl(this.nuevoFavorito.value, Validators.required));
    //Otra forma de agregar con builder
    this.favoritosArr.push(this.fb.control(this.nuevoFavorito.value, Validators.required));
    this.nuevoFavorito.reset(); //para borrar lo que tiene el input
  }

  borrarItem(index : number){
    console.log(index);
    this.favoritosArr.removeAt(index);
  }
}
