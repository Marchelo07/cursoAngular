import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Pipes de angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y flechas',
            icon: 'pi pi-align-left',
            routerLink: '/' //para que rediriga a basicosComponent
          }, {
            label: 'Números',
            icon: 'pi pi-dollar',
            routerLink: 'numeros' //colocamos el path de la ruta 
          }, {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink: 'no-comunes' //colocamos el path de la ruta 
          }
        ]
      }, {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog',
        routerLink: 'ordenar'
      }
    ];
  }
}
