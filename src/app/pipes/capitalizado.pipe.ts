// clase generada al ejecutar el comando de creación de PIPES personalizados

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  // modificamos el TRANSFORM de acuerdo a nuestra personalización del PIPE
  transform(value: string, todas: boolean = true): string {

    value = value.toLocaleLowerCase();
    let nombres = value.split(' ');

    if( todas ) {
      nombres = nombres.map ( nombres => {
        return nombres[0].toUpperCase() + nombres.substr(1);
      })
      return nombres.join(' ');

    }else {

    return nombres.join(' ');
    }
  }

}
