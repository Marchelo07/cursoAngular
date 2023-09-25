import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validators/email-validator.service';

//Se pude utilizar las validaciones desde un archivo o servicio
// import { emailPattern, nombreApellidoPattern, validadorUsername } from 'src/app/shared/validators/validaciones';
import { ValidatorsService } from 'src/app/shared/validators/validators.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  /*FormBuilder 3 parametros 1) valor del control 2) validacion sincronas #) Validaciones asincronas */
  miFormulario: FormGroup = this.fb.group({
    // nombre: ['', [Validators.required, Validators.pattern(nombreApellidoPattern)]], //Validaciones desde un archivo.ts
    nombre: ['', [Validators.required, Validators.pattern(this.vs.nombreApellidoPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.vs.emailPattern)], [this.validadorEmail]],
    username: ['', [Validators.required, this.vs.validadorUsername]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required,]],
  }, {
    //Se puede realizar validaciones de los controls del formulario, leyendo los campos en tiempo real del formulario
    validators: [this.vs.camposIuales('password', 'password2')]
  });

  get emailErrorMsg(): string{
    const errors = this.miFormulario.get('email')?.errors;
    if(errors?.['required']){
      return 'Email es requerido';
    }else if(errors?.['pattern']){
      return 'Email inválido';
    }else if(errors?.['emailTomado']){
      return 'Email ya está en uso';
    }
    return '';
  }

  constructor(
    private fb: FormBuilder,
    private vs: ValidatorsService, //IInyectamos el servicio para poder usar las validaciones de un servicio
    private validadorEmail: EmailValidatorService
  ) { }


  ngOnInit() {

    this.miFormulario.reset({
      nombre: 'Marcelo Rosero',
      email: 'test1@test.com',
      username: 'marchelo',
      password: '123456',
      password2: '123456'
    })
  }

  campoValido(campo: string) {
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get('email')?.touched;
  }

  //TODO: SE REALIZA CAMBIOS PARA OPTIMIZAR EL CODIGO
  // emailRequired() {
  //   return this.miFormulario.get('email')?.errors?.['required'] && this.miFormulario.get('email')?.touched;
  // }

  // emailInvalido() {
  //   return this.miFormulario.get('email')?.errors?.['pattern'] && this.miFormulario.get('email')?.touched;
  // }

  // emailTomado() {
  //   return this.miFormulario.get('email')?.errors?.['emailTomado'] && this.miFormulario.get('email')?.touched;
  // }


  submitFormulario() {
    this.miFormulario.markAllAsTouched();
  }
}
