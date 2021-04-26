 import { Component } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../servicios/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {


  agregar(event :any){
    event.preventDefault();
    console.log(event);
  }



  cambiarNombre(event : any){
    console.log(event);
  }

//creo un get para trabajar modificando nuestros personajes de forma centralizada desde el servicio y no desde el compomente
// get personajes(): Personaje[]{
//   return this.dbzService.personajes;


nuevo :Personaje = {
  nombre:'Maestro Roshi',
  poder: 9000
}

agregarNuevoPersonaje(personaje: Personaje){
  //console.log('Main Page component');
  //debugger;
  //this.personajes.push(personaje);
}

// constructor(private dbzService: DbzService){
  
// }

constructor(){

}

}

 
  


