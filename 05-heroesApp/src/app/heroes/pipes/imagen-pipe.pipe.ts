import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/herores.interface';

@Pipe({
  name: 'imagenPipe'
  // ,pure: false // Se puede poner como pipe inpuro para que se dispare cada vez que haya cambios en el objeto
  //heroe, no se recomienda ponerlo en falso por que consume recursos (Esto sirve para cuando se modifique la imgen
  //del heroe al pulsar guardar se actualice la img )
})
export class ImagenPipePipe implements PipeTransform {

  transform(heroe: Heroe): string {

    if(!heroe.id && !heroe.alt_img){
      return 'assets/no-image.png';
    } else if(heroe.alt_img){
      return heroe.alt_img;
    }else{
      return `assets/heroes/${heroe.id}.jpg`
    }

  }

}
