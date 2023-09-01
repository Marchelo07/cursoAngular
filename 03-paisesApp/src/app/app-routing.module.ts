import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PorPaisComponent } from "./pais/pages/por-pais/por-pais.component";
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from "./pais/pages/por-capital/por-capital.component";
import { VerPaisComponent } from "./pais/pages/ver-pais/ver-pais.component";

const routes: Routes = [
    {   //Configuracion por defecto de la aplicacion
        path: '',
        component: PorPaisComponent,
        pathMatch: 'full'
    }, {
        path: 'region',
        component: PorRegionComponent
    }, {
        path: 'capital',
        component: PorCapitalComponent
    }, {
        path: 'pais/:id',
        component: VerPaisComponent
    }, { //Para mostrar una pagina cuando pone una url desconocida
        path: '**',
        redirectTo: ''
    }
]

@NgModule({
    imports: [
        //Rutas principales
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}