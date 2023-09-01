import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators'
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  //Puede ser null el pais;
  pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) { }

  ngOnInit() {
    //Reduce el codigo de otra forma utilizando rjsx
    // switchMap accede al parametro que se tiene en el primer subscribe y luego puede llamara a otro
    //subscribe enviando el parametro para recibir la respuesta del subscribe que onsulta el pais por alpha
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.paisService.getPaisPorAlpha(id)),
        tap(console.log) //para que imprima en consola la respuesta del subscribe (pais)
      )
      .subscribe(pais => {
        this.pais = pais[0];
        console.log(this.pais)
      });

    /*Se subcribe para poder obtener la informacion (parametros)que tiene la url*/
    // this.activatedRoute.params.subscribe( params =>{
    // this.activatedRoute.params.subscribe(({ id }) => { // se aplica desestructuracion
    //   console.log(id);

    //   this.paisService.getPaisPorAlpha(id).subscribe(pais => {
    //     console.log(pais)
    //   });
    // });
  }

}
