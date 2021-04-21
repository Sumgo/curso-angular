import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl:'heroe.component.html'
})

 export class HeroeComponent{

    nombre  : string = 'Ironman';
    edad    : number = 45;

    //Métodos
    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`;
    }


    //los get no son métodos, son como propiedades que cuando las llamamos serán procesadas
    get nombreCapitalizado():string{
        return this.nombre.toUpperCase(); 
    }

    cambiarNombre(){
         this.nombre = 'Spiderman';
    }

    cambiarEdad(){
         this.edad = 36;
    }

 }