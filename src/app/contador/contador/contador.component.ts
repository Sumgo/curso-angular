import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
            <h1>{{titulo}}</h1>
            <h3>La base es: <strong>{{base}}</strong></h3>

            <button (click) = "acumularBase(+base) ">+ {{base}}</button>
            <span>{{baseModificada }}</span>    
            <button (click) = "acumularBase(-base) ">- {{base}}</button>
    `
})


export class ContadorComponent {
     //Acustúmbrate a añadir el alcance y el tipado de la propiedad
  public titulo: string = 'Contador App';
  public base: number = 5;
  public  baseModificada: number = 0;

  acumularBase(valor: number){
   
    this.baseModificada += valor;
  }

}