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
    new Contacto("Leia", "Princesa", "assets/img/PrincessLeia.jpg", "leia"), 
    new Contacto("Han Solo", "Cazarrecompensas", "assets/img/HanSolo.jpg", "han"),
    new Contacto("Rey", "Recolectora", "assets/img/Rey.jpg", "rey"),
    new Contacto("Finn", "Piloto", "assets/img/Finn.png", "finn")
  ];

  constructor() {}

}
