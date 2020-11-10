import { Injectable } from '@angular/core';
import { Contacto } from '../contacto/contacto.model';

@Injectable()
export class ContactosService {

  listadoContactos:Contacto[] = [
    new Contacto("Leia", "Princesa", "assets/img/PrincessLeia.jpg"), 
    new Contacto("Han Solo", "Cazarrecompensas", "assets/img/HanSolo.jpg"),
    new Contacto("Rey", "Recolectora", "assets/img/Rey.jpg"),
    new Contacto("Finn", "Piloto", "assets/img/Finn.png")
  ];

  constructor() { }

  getListadoContactos(){
    return [...this.listadoContactos];
  }

  getContacto(nombre:string){
    return this.listadoContactos.find(x => x.nombre == nombre);
  }
}
