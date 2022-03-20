// clase generada al ejecutar el comando de creación de PIPES personalizados

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  // modificamos el TRANSFORM de acuerdo a nuestra personalización del PIPE
  transform(value: string, mostrar: boolean = true): string {

    return ( mostrar ) ? '*'.repeat(value.length) : value;
  }

}
