import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";
import { CommonModule } from "@angular/common";

@NgModule({
    //se declaran todos los componentes
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    //que componentes deseamos que sean publicos y se puedan utilizar fuera del modulo de heroe
    exports:[
        ListadoComponent
    ],
    //sirve para poder utilizar directivas personalizadas (ngFor, ngIf)
    imports:[
        CommonModule
    ]
})
export class HeroeModule {

}