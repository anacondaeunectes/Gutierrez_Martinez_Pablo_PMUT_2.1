import { Component } from '@angular/core';  
import { Router } from '@angular/router'
import { Contacto } from './contacto/contacto.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  router:Router;
  
  listadoContactos:Contacto[] = [
    new Contacto("Leia", "Princesa", ""), 
    new Contacto("Han Solo", "Cazarrecompensas", ""),
    new Contacto("Hey", "Recolectora", ""),
    new Contacto("Finn", "Piloto", "")
  ];

  constructor() {}

  onClickContacto(){
    // this.router.navigate(['/contacto', ]);
  }

}
