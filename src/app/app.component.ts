import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // creamos y declaramos las variables (al hacerlo ya tendremos acceso para usarlo en el HTML)
 
  nombre: string = 'Eddie Vedder';
  nombre2: string = 'kUrT cObAiN'
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  PI: number = Math.PI;
  porcentaje: number = 0.234;
  salario: number = 1234.5; 
  fecha: Date = new Date();

  activar: boolean = true;

  videoUrl: string = 'https://www.youtube.com/embed/EdytiYSt_mQ';

  valorPromesa = new Promise<string>( (resolve) => {

    setTimeout(() => {
      resolve('Llegó la data')
    }, 4500);
  });

  cantante = {
    nombre: 'Mick Jagger',
    clave: 'Stone',
    edad: 78,
    dirección: {
      calle: 'Avenida Siempreviva',
      casa: 8
    }
  }

}
