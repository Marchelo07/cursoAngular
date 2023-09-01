import { Component } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  templateMenu: MenuItem[] = [
    { texto: 'Básicos', ruta: './template/basicos' },
    { texto: 'Dinámicos', ruta: './template/dinamicos' },
    { texto: 'Switches', ruta: './template/switches' },
  ];

  reactiveMenu: MenuItem[] = [
    { texto: 'Básicos', ruta: './reactive/basicos' },
    { texto: 'Dinámicos', ruta: './reactive/dinamicos' },
    { texto: 'Switches', ruta: './reactive/switches' },
  ];

}

interface MenuItem {
  texto: string;
  ruta: string;
}
