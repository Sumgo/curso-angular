import { Injectable } from "@angular/core";

import { Personaje } from "../interfaces/dbz.interface";

@Injectable()   
export class DbzService {

//Añadiendo la palabra private hacemos que sean privados los personajes y no se pueda acceder a esta propiedad del servicio desde ninguna otra parte, solo desde él
    private _personajes : Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 8500
        }
      ];

      get personajes(): Personaje[]{
          //Añadir la siguiente sintaxis en el return de _personajes, es una buena práctica de JS para impedir que se pasen por referencia los datos que contiene, de esta forma se está creando un nuevo arreglo al que será únicamente donde tenga el acceso
          return [...this._personajes];
      }
    

    constructor(){}
        agregarPersonaje(personaje: Personaje){
            this._personajes.push(personaje);
        }



}