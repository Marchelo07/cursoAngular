import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { BasicosComponent } from './ventas/pages/basicos/basicos.component';
import { NumerosComponent } from './ventas/pages/numeros/numeros.component';
import { NoComunesComponent } from './ventas/pages/no-comunes/no-comunes.component';
import { OrdenarComponent } from './ventas/pages/ordenar/ordenar.component';


const routes: Routes = [
  {
    path: '',
    component: BasicosComponent,
    pathMatch: 'full' //para cuando incie y no haya nada en la url diriga a BasciosComponent
  }, {
    path: 'numeros',
    component: NumerosComponent
  }, {
    path: 'no-comunes',
    component: NoComunesComponent
  }, {
    path: 'ordenar',
    component: OrdenarComponent
  }, {
    path: '**',
    redirectTo: ''
    // se coloca al unico como full para cuando hay cambio en la url por una ruta que no exista
    //le diriga a BasicosComponent, por que tiene el path ''
  }
];

@NgModule({
  imports: [
    //forRoot para rutas principales (centrales)
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule //exportamos para poder utilizar en el appComponent
  ],
})
export class AppRouterModule { }
