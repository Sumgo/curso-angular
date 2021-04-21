import { summaryFileName } from '@angular/compiler/src/aot/util';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //Acustúmbrate a añadir el alcance y el tipado de la propiedad
  public titulo: string = 'Contador App';

  public numero: number = 10;

  public base: number = 5;
  public  baseModificada: number = 0;


  //Métodos
  sumar() {
    this.numero += 1;

  }
  restar() {
    this.numero -= 1;
  }

  acumular(valor: number) {
    this.numero += valor;
  }

  acumularBase(valor: number){
   
    this.baseModificada += valor;



  }
}


