import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  // miFormulario: FormGroup = new FormGroup({
  //   'nombre': new FormControl('RTX3600'),
  //   'precio': new FormControl(1500),
  //   'existencias': new FormControl(5),
  // })

  //Usando formBuilder
  /* Formularios se puede realizar validaciones sincronas y asincronas
    sincronas: validaciones mientras se precionan las teclas
    asyncornas: una vez termina de haber cambios en el control (input,etc)
    [] se puede crear arrglo de validadores
  */
  miFormulario: FormGroup = this.fb.group({
    // nombre: ['RTX3600', [Validators.required, Validators.minLength(3)]],
    nombre: [, [Validators.required, Validators.minLength(3)]],
    precio: [, [Validators.required, Validators.min(0)]],
    existencias: [, [Validators.required, Validators.min(0)]], //con el espacio se coloca null
  });

  constructor(
    private fb: FormBuilder
  ) { }


  //Para iniciar el formulario con valores
  /*Nota: No se utliza el setValue por que eso obliga a que todos los componentes deben tener un valor*/
  ngOnInit() {
    this.miFormulario.reset({
      nombre : 'RTX3600',
      precio : 150
    });
  }

  campoEsValido(campo: string) {
    return this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched;
  }

  guardar() {

    if (this.miFormulario.invalid) {
      //simular que el formulario fue tocado y mostrar los campos requeridos
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }
}
