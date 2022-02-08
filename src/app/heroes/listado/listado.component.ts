import { Component } from '@angular/core';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})


export class ListadoComponent  {

  heroes : string[] = ["spiderman", "ironman", "hulk","yo"];
  heroBorrado: string  = "";
  
  borrarHeroe() 
  {
    console.log("aaa");
    
    this.heroBorrado=this.heroes.shift() || "";
    

    // this.heroBorrado=hBorrado;
       
  }

}
