import { Component,OnInit } from '@angular/core';  
import { ContactosService } from '../services/contactos.service';
import { Contacto } from '../contacto/contacto.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  listadoContactos:Contacto[];

  constructor(public servicioContactos:ContactosService) {}

  ngOnInit(){
    this.listadoContactos = this.servicioContactos.getListadoContactos();
  }

  test(){
    console.log(this.servicioContactos.getContacto('leia'));
  }

}
