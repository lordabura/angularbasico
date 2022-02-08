import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({


    declarations:[
        HeroeComponent,
        ListadoComponent
    ],

    exports:
    [
        ListadoComponent //VISIBLE FUERA DEL MODULO  (es como su fuera publica)
    ],
    imports:[
        CommonModule
    ]


})


export class HeroesModule
{

}