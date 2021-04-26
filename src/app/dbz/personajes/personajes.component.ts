import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../servicios/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
 
})
export class PersonajesComponent {

  //Añadimos el decorador de Input para indicarle al componente hijo que se trata de una propiedad que va a recibir
//@Input() personajes : Personaje[] = [];

get personajes(){
  return this.dbzService.personajes;
}

constructor(private dbzService: DbzService){}

}

 