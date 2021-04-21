//Importe el NgModule
import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

//Decorador
@NgModule({
declarations: [
    //Mis componentes del modulo
    HeroeComponent, 
    ListadoComponent
],
//Cosas que queremos que sean visibles desde fuera del módulo
exports:[
    ListadoComponent
],

//Modulos normalmente
imports:[
    CommonModule //Nos da directtivas como ngfor y ngIf por lo que si no lo importamos posiblemnete nuetsra app no funcionará
]

})
//Clase 
export class HeroesModule{

}