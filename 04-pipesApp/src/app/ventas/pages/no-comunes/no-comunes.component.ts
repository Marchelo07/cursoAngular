import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {

  //in18Select
  nombre: string = 'Marcelo';
  genero: string = 'masculino';
  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //in18Plural
  clientes: string[] = ['Marcelo', 'Erick', 'lala'];
  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # de clientes esperando.'
  }

  cambiarGenero() {
    if (this.genero === 'masculino') {
      this.nombre = 'Dalila';
      this.genero = 'femenino';
    } else {
      this.nombre = 'Marcelo';
      this.genero = 'masculino';
    }
  }

  borrarCliente() {
    this.clientes.splice(0, 1);
  }

  //Pipe keyvalue
  persona = {
    direccion: 'La Floresta',
    nombre: 'Marcelo',
    edad: '33 años'
  }

  //Pipe Json
  heroes = [{
    personaje: 'Acuaman',
    vuela: false
  }, {
    personaje: 'Superman',
    vuela: true
  }, {
    personaje: "Batman",
    vuela: false
  }];

  //Async Pipe
  //Creamos un subcribe o uns promesa para que funcione el pipe
  miObservable = interval(1000) // 1,2,3,4,5...
  valorPromesa = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('Tenemos data de promesa');
      
    }, 3500);
  });
  
}
