import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent {

  @ViewChild('miFormularioDinamico') miFormularioDinamico !: NgForm;

  nuevoJuego: string = '';

  persona: Persona = {
    nombre: 'Marcelo',
    favorito: [
      { id: 1, nombre: 'Call of duty' },
      { id: 2, nombre: 'Mario Bross' },
    ]
  }

  validacionCampo(): boolean {
    return this.miFormularioDinamico?.controls['nombre']?.invalid &&
      this.miFormularioDinamico?.controls['nombre'].touched;
  }

  guardar(frm: NgForm) {
    console.log(frm)
    if (frm.valid) {
      console.log("Guardando");
    } else {
      console.log("frm invalido")
    }
  }

  agregarJuego() {
    const newJuego: Favorito = {
      id: this.persona.favorito.length + 1,
      nombre: this.nuevoJuego
    }
    this.persona.favorito.push({ ...newJuego });
    this.nuevoJuego = '';
  }

  eliminarJuego(index: number) {
    this.persona.favorito.splice(index, 1);
  }

}

interface Persona {
  nombre: string;
  favorito: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}
