import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pipes';
  
  fecha = new Date();

  nombre:string ="Huguez";
  
  nombreCompleto:string = "carlos alonso huguez murrieta";

  PI:number = 3.14159265;

  a:number = 0.234;

  arreglo:number[] = [0,1,2,3,4,5,6,7,8,9];
  
  dinero:number = 25.50;

  heroe = {
    nombre : "Batman",
    poder:"ser Batman",
    edad: 35,
    direccion:{
      calle: "calle 1",
      casa: 2
    }
  };

  valorPromesa = new Promise( ( resolve, reject ) => {
    setTimeout( ()=>resolve( 'Llego la data!' ), 3000 );
  });
  
  video = "Lo2qQmj0_h4";

  activar:boolean = true;
}
