import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroesBorrados: string[] = [];

  borrarHeroe() {
    // this.heroes.splice((this.heroes.length -1) , 1)
    const heroDeleted = this.heroes.shift();
    if(heroDeleted != undefined){
      this.heroesBorrados.push(heroDeleted || '');
    }
  }

}
