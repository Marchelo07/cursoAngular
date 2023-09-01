import { Component, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  //Se coloca ! por que sabemos que si existe el formulario
  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto : "GTX",
    precio : 10,
    existencias : 10,
  }


  // guardar(miFormulario: NgForm) {
  guardar() { //Dejo de recibir el formulario por que se obtiene el formulario por el @iewChild
    console.log(this.miFormulario);

    //Reiniciar el formulario
    //this.miFormulario.resetForm();
    this.miFormulario.resetForm();
  }

  validarNombre(): boolean {
    // Se agrega this.miFormulario? por que el formulario aun no termina de cargar completamete
    return this.miFormulario?.controls['producto']?.invalid &&
      this.miFormulario?.controls['producto'].touched;
  }

  validarPrecio(): boolean {
    return this.miFormulario?.controls['precio']?.value < 0 &&
      this.miFormulario?.controls['precio'].touched;
  }
}
