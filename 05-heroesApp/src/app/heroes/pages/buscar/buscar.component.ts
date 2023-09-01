import { Component } from '@angular/core';
import { Heroe } from '../../interfaces/herores.interface';
import { HeroesService } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete'

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {

  termino: string = '';
  heroes: Heroe[] = [];
  heroeSeleccionado!: Heroe | undefined;

  constructor(
    private heroesService: HeroesService,
  ) { }

  buscando() {
    this.heroesService.getSugerencia(this.termino.trim()).subscribe(heroes => {
      this.heroes = heroes;
    })
  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent) {
    console.log(event);

    if (!event.option.value) {
      this.heroeSeleccionado = undefined;
      return;
    }

    const heroe: Heroe = event.option.value;
    this.termino = heroe.superhero;

    this.heroesService.getHeroeById(heroe.id!).subscribe(heroe => {
      this.heroeSeleccionado = heroe;
      console.log(this.heroeSeleccionado)
    });
  }

}
