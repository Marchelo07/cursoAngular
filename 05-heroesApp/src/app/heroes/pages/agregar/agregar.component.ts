import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
import { switchMap } from 'rxjs/operators';
import { Heroe, Publisher } from '../../interfaces/herores.interface';
import { HeroesService } from '../../services/heroes.service';
import { DialogConfirmarComponent } from '../../components/dialog-confirmar/dialog-confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    }, {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ];

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    publisher: Publisher.DCComics,
    first_appearance: '',
    alt_img: ''
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private matDialog: MatDialog,
  ) { }

  ngOnInit() {

    //para evitar el error cuando es agregar y como no se pasa ningun id por la url
    if (!this.router.url.includes('editar')) {
      return;
    }

    this.activatedRoute.params.pipe(
      switchMap(({ id }) => this.heroesService.getHeroeById(id))
    ).subscribe(heroe => this.heroe = heroe);

  }

  guardar() {
    if (this.heroe.superhero.trim().length === 0) {
      return;
    }

    if (this.heroe.id) {
      this.heroesService.actualizarHeroe(this.heroe).subscribe(resp => {
        this.mostrarSnakBar("Heroe actualizado...");
      });
    } else {
      this.heroesService.guardarHeroe(this.heroe).subscribe(resp => {
        this.router.navigate(['/heroes/editar', resp.id]);
        this.mostrarSnakBar("Heroe registrado...");
      });
    }
  }

  borrarHeroe() {

    const dialog = this.matDialog.open(DialogConfirmarComponent, {
      width: '300px',
      data: { ...this.heroe }
    });
    dialog.afterClosed().subscribe(
      (result) =>{
        if(result){
          this.heroesService.borrarHeroe(this.heroe.id!).subscribe(resp => {
            this.router.navigate(['/heroes'])
          });
        }
      }
    );

  }

  mostrarSnakBar(mensaje: string) {
    this.matSnackBar.open(mensaje, '', {
      duration: 2500
    });
  }

}
