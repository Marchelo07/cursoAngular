import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../../interfaces/herores.interface';
import { switchMap } from 'rxjs';
import { HeroesService } from '../../services/heroes.service';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService,
    private router: Router,
  ) { }

  ngOnInit() {
    // this.activatedRoute.params.subscribe(({ id }) => console.log(id))
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.heroesService.getHeroeById(id))
      ).subscribe(heroe => {
        this.heroe = heroe;
        console.log(this.heroe)
        this.heroe;
      });
  }

  regresar() {
    this.router.navigate(['/heroes/listado']);
  }
}
