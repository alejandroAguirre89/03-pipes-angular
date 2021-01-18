import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activarContrasena: boolean = false): string {

    /* Repeat e suna funcion de ES6 */
    return (activarContrasena) ? '*'.repeat( value.length ) : value;

    /* if (activarContrasena) {
      let cantLetras = value.length;
      let resultado = ''
      for(let i=0; i< cantLetras; i++) {
        resultado += '*'
      }
  
      return resultado;
    } else {
      return value;
    } */
  }

}
