import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { vuelaPipe } from './pipes/vuela.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';



@NgModule({
  declarations: [
    BasicosComponent,
    NumerosComponent,
    OrdenarComponent,
    NoComunesComponent,
    MayusculasPipe,
    vuelaPipe,
    OrdenarPipe
  ],
  exports: [
    BasicosComponent,
    NumerosComponent,
    OrdenarComponent,
    NoComunesComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class VentasModule { }
