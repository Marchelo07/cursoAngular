import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { PaisesService } from '../../services/paises.service';
import { PaisSmall } from '../../interfaces/paises.interface';
import { pipe, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.css']
})
export class SelectorPageComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    region: ['', [Validators.required]],
    pais: ['', [Validators.required]],
    frontera: ['', [Validators.required]],
  });

  regiones: string[] = [];
  paises: PaisSmall[] = [];
  // fronteras: string[] = [];
  fronteras: PaisSmall[] = [];

  cargando: boolean = false;

  constructor(
    private fb: FormBuilder,
    private paisesService: PaisesService,
  ) { }

  ngOnInit() {
    this.regiones = this.paisesService.regiones;


    //Cuando el selector de region cambia
    // this.miFormulario.get('region')?.valueChanges.subscribe(region => {
    //   console.log(region);
    //   this.paisesService.getPaisesPorRegion(region).subscribe(paises => {
    //     console.log(paises)
    //     this.paises = paises;
    //   })
    // });

    //Restructuracion de codigo
    this.miFormulario.get('region')?.valueChanges
      .pipe(
        /*utilizamos el tap para disparar antes que realice el consumo del obsevable, 
        en este caso borramos el pais ya que cambia la region, _ para que no usemos nada*/
        tap((_) => {
          this.miFormulario.get('pais')?.reset('');
          this.cargando = true;
        }),
        //pasamos por el switMap para que dispare el segundo observable enviandole la region
        switchMap(region => this.paisesService.getPaisesPorRegion(region))
      ).subscribe(paises => {
        this.paises = paises;
        this.cargando = false;
      });

    //Cuando cambia el pais
    this.miFormulario.get('pais')?.valueChanges
      .pipe(
        tap(() => {
          this.miFormulario.get('frontera')?.reset('');
          this.cargando = true;
        }),
        switchMap(codigo => this.paisesService.getPaisPorCodigo(codigo)),
        switchMap(pais => this.paisesService.getPaisesPorCodigos(pais !== null ? pais[0].borders : []))
      )
      .subscribe(paises => {
        //si no tiene nada en pais entonces retorna un [] vacio
        // this.fronteras = pais?.borders || [];         
        // this.fronteras = pais !== null ? pais[0].borders : [];
        console.log(paises);
        this.fronteras = paises;
        this.cargando = false
      });
  }

  guardar() {
    console.log(this.miFormulario);
  }
}
