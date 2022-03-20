// clase generada al ejecutar el comando de creación de PIPES personalizados

import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  // creamos el constructor
  constructor( private domSanitizer: DomSanitizer) {}

  // modificamos el TRANSFORM de acuerdo a nuestra personalización del PIPE
  transform(value: string, ...args: unknown[]): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl( value );
  }

}
