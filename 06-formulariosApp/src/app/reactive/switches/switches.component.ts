import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    condiciones: [true, Validators.requiredTrue]
    /*Para que en el formulario las condiciones sea true, por que al quitar el check se mantenia como true
    a pesar de que el check es requerido*/
  });

  persona = {
    genero: 'F',
    notificaciones: true,
  }

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    /* seteamos por defecto los valores al formulario */
    this.miFormulario.reset(
      {
        ...this.persona,
        condiciones: true
      });

    /*Ingresa a los dos metodos por que 1) hay cambios en el fomulario y hay cambios cuando cambia el check de terminos y condiciones */
    /*Formularios reactivos se pueden sincronizar el formulario con el objeto persona,*/
    // this.miFormulario.get('condiciones')?.valueChanges.subscribe(newValue =>{
    //   console.log(newValue)
    // });

    // /* haciendo el subcribe cuando haya un cambio del formulario ingresa a la funcion */
    // this.miFormulario.valueChanges.subscribe(form=>{
    //   console.log(form)
    // });

    /* Para sincronizar la informacion con valores del formulario y persona*/
    // this.miFormulario.valueChanges.subscribe(form => {
    //   delete form.condiciones;
    //   this.persona = form
    // });
    //Mismo metodo pero aplicando la desestructuracion
    /*Lo que hace es quita las condiciones y en restToInfo se encuentra el resto de las propiedades */
    this.miFormulario.valueChanges.subscribe(({ condiciones, ...restToInfo }) => {
      this.persona = restToInfo;
    });
  }

  guardar() {
    const formValue = { ...this.miFormulario.value };
    delete formValue.condiciones;
    console.log(formValue);
    //iguala las las propiedades que tiene el formulario al objeto persiona
    this.persona = formValue;
  }
}
