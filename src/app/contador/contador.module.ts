//Importe el NgModule
import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { ContadorComponent } from './contador/contador.component';


//Decorador
@NgModule({
declarations: [
    //Mis componentes del modulo
    ContadorComponent

],
//Componentes que queremos que sean visibles desde fuera del módulo
exports:[
    ContadorComponent
],

//Modulos normalmente
imports:[
    CommonModule //Nos da directtivas como ngfor y ngIf por lo que si no lo importamos posiblemnete nuetsra app no funcionará
]

})
//Clase que exportamos
export class ContadorModule{

}