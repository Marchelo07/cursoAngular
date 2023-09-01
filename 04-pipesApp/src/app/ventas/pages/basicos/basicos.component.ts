import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  nombreUppercase: string = "marcelo";
  nombreLowercase: string = 'Marcelo';
  nombreTitleCase: string = "MaRcElO RoSEro";

  fecha : Date = new Date();
}
