import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  htmlElement: ElementRef<HTMLElement>;

  /*Convertimos en un setter para que cuando sea ejecutado es decire cuando envie el parametro
  o valor del input color, tome ese color y lo aplique al elemento, y se agrega una variable 
  para guardar el color si es que en el futuro se pueda utilizar*/
  private _color: string = 'red';
  private _mensaje: string = 'Este campo es requerido';

  @Input() set color(valor: string) {
    this._color = valor;
    //para evitar repetir el codigo llamamos al metodo que setea por defecto el color si es que en la
    //directiva no es enviado el valor [color]
    this.setColor();
    // this.htmlElement.nativeElement.style.color = valor;
  };
  @Input() set mensaje(valor: string) {
    // this.htmlElement.nativeElement.innerText = valor;
    this._mensaje = valor;
    this.setMensaje();
  };

  //Para hacer la velidación y mostrar el mensaje si no tiene nada en el input
  @Input() set valido(valor: boolean) {
    if(valor === true){
      this.htmlElement.nativeElement.classList.add('hidden');
      //Se agrega en el archivo css la clase hidden para ocultar
    }else{
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
  };

  // @Input() color: string = 'red';
  // @Input() mensaje: string = 'Este campo es necesario';

  constructor(
    private el: ElementRef<HTMLElement>
  ) {
    this.htmlElement = el;
  }

  /* Se comenta el codigo por que se puede realizar de otra forma*/
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
    // /*Cuando existen cambis en las propiedades es necesario evaluar
    // ya que en el objeto solo recibe (mensaje o color) al dispararse el evento de cambio*/
    // if(changes['mensaje']){
    //   const mensaje = changes['mensaje'].currentValue;
    //   this.htmlElement.nativeElement.innerText = mensaje;
    // }
    // if(changes['color']){
    //   const color = changes['color'].currentValue;
    //   this.htmlElement.nativeElement.style.color = color;
    // }
  }

  ngOnInit(): void {
    console.log('ngOnInit en al directiva');
    /*Se comenta ya que en un principio las variables en el ciclo de vida son undefined */
    // console.log(this.color); //undefined
    // console.log(this.mensaje); //undefined

    this.setEstilo();
    this.setColor();
    this.setMensaje();
  }

  setEstilo() {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  /*Se comenta por que la aplicacion del color y cambio de nombre se los hizo en los setters,
  del principio */
  // setColor() {
  //   //Se puede agregar clase al componente que tiene la directiva
  //   this.htmlElement.nativeElement.style.color = this.color;
  // }

  // setMensaje() {
  //   this.htmlElement.nativeElement.innerText = this.mensaje;
  // }

  setColor() {  
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMensaje() {
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }

}
