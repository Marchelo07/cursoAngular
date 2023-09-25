import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component implements
  OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
  AfterViewChecked, OnDestroy {

  nombre: string = 'Marcelo';
  segundos: number = 0;
  timerSubscription !: Subscription;

  constructor() {
    console.log('Constructor');
  }



  /*ngOnchanges, se dispara solo cuando hay cambios en los input (No son inputs de texto sino input cuando se envia informacion
    de un componente padre a un hijo) */
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterView');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    //Para detener el intervalor y no se ejecute muchas veces
    this.timerSubscription.unsubscribe();
    console.log('limpiando timer')
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.timerSubscription = interval(1000).subscribe(i =>{
      // console.log(i)
      this.segundos = i;
    });
  }

  guardar() {

  }
}
