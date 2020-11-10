import { Component, OnInit } from '@angular/core';
import { Contacto } from './contacto.model';
import { ContactosService } from "../services/contactos.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {

  contacto:Contacto;

  constructor(public servicioContactos:ContactosService, public activatedRouter:ActivatedRoute) {
    this.activatedRouter.paramMap.subscribe(x => {
      this.contacto =  this.servicioContactos.getContacto(x.get('nombre'));
    })
  }

  ngOnInit() {
  }

}
