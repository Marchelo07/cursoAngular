import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/herores.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  listadoHeroes: Heroe[] = [];

  constructor(
    private heroesService: HeroesService,
  ) { }

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe(data => this.listadoHeroes = data);
  }
}
