import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  /** En este pipe nosotros podremos ajustar
   * cosas tales como el:
   * value: valor recibido para trasformar visualmente
   * args: array de parametros que podemos recibir, similar
   * a lo que vemos con el pipe date, entre otros y
   * decir el tipo de retorno que queremos hacer.
   */

  /** Yo puedo recibir los parametros de diferente
   * manera a la predefinida, por ejemplo: */
  /* transform(value: unknown, ...args: unknown[]): string { */
  transform(value: string, todas: boolean = true): string {
    
    value = value.toLowerCase();
    let nombres = value.split(' ');

    if( todas ) {
      /* crea un nuevo array con los resultados de la llamada
      a la función indicada aplicados a cada uno de sus 
      elementos. */
      nombres = nombres.map( nombre => {
        return nombre[0].toUpperCase() + nombre.substr(1);
      })

      console.log(nombres);
    } else {
      nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
    }

    /* Convierte los elementos de un array y los 
    coinvierte en un string separado por el valor
    dado, en caso de no dar un parametro, el string
    estara separado por comas */
    return nombres.join(' ');
  }

}
