import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    MenuComponent
  ],
  exports:[
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule 
    //Importamos el modulo para poder utilizarlos en el app, por que se puede utilizar 
    //por que el sharedModule lo temeos inportado en el app.module
  ]
})
export class SharedModule { }
