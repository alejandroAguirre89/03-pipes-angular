import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Capitán América';
  nombreMio : string = 'JoHAn ALEjandRO aguiRRe';
  arreglo: number[] = [1,2,3,4,5,6,7,8,9,10];
  PI: number = Math.PI;
  porcentaje: number = 0.235;
  salario: number = 275000.5;
  fecha : Date = new Date();
  idioma: string = 'es';
  videoUrl : string = 'https://www.youtube.com/embed/72kNAzuW7n4';
  activarContrasena: boolean = true;

  heroe = {
    nombre: 'logan',
    clave: 'Wolverine',
    edad: 110,
    direccion: {
      calle: 'Primera',
      casa: 'Mansión X'
    }
  }

  valorPromesa = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve('Llego la data');
    }, 4500)
  })
}
