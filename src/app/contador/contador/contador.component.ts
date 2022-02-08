import { Component } from "@angular/core";



@Component({
    selector: "app-contador", //NOMBRE DE TU COMPONENTE SE PONE APP- POR CONVENCION
    template:`
    <h1>{{titulo}}</h1>


    <button (click)=" acumular2(multiploBase)">{{base}}</button>
    <span>{{base}}</span>
    <button (click)=" acumular2(-multiploBase)">-{{base}}</button>

    <br/>
    <br/>
    <br/>



    <button (click)=" acumular(1)">+1</button>
    <span>{{numero}}</span>
    <button (click)=" acumular(-1)">-1</button>

    `
})

export class ContadorComponent
{

    titulo :string = 'jhona';
    numero :number = 10;
    base :number =5;
    multiploBase : number= this.base;
  
    acumular2(valor:number)
    {
        console.log(valor);
        this.base+=valor;
    }
  
  
    acumular(valor:number)
    {
        this.numero+=valor;
    }
  
  
    sumar()
    {
      this.numero++;
    }
  
    restar()
    {
      this.numero--;
    }
  
}