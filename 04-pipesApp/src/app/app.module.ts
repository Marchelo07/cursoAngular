import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// Modulo personalizado
//import { PrimeNgModule } from './prime-ng/prime-ng.module'; //ya no se lo importa por que la importacion ya tiene en el sharedModule
import { AppRouterModule } from './app-router.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//Cambiar el locale de la aplicacion (idioma, para que tome las fechas, numeros (miles decimales))
import localeEsHN from '@angular/common/locales/es-HN'; //ejemplo toma de espaöl Honduras
import localeFr from '@angular/common/locales/fr'; //ejemplo toma de espaöl Honduras
import { registerLocaleData } from '@angular/common';
//se crea la funcion, para registrar el idioma
registerLocaleData(localeEsHN);
registerLocaleData(localeFr);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule, //importamos el router para poder dirigir a las rutas
    // PrimeNgModule,
    SharedModule,
    VentasModule  //importamos el modulo para poder utilizar todos los compotentes que estan siendo importados en e VentasModul
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-HN' } //Se define para que se pueda aplicar de manera global el idioma
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
