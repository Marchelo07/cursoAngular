import { NgModule } from '@angular/core';
import { ErrorMsgDirective } from './directivas/error-msg.directive';
import { CustomIfDirective } from './directivas/custom-if.directive';



@NgModule({
  declarations: [
    ErrorMsgDirective,
    CustomIfDirective
  ],
  //Exportamos las directivas para que puedan ser utilzadas
  exports:[
    ErrorMsgDirective,
    CustomIfDirective
  ]
})
export class SharedModule { }
