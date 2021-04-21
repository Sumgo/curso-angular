import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroeBorrado : string  = '';

  
borrarHeroe(){
  //console.log('borrando ...');

  this.heroeBorrado = this.heroes.shift() || ''; //el método shift borrar el primer elemento del array y devuelve el estado del array actual

}
} 