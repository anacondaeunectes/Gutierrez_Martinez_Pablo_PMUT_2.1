import { Component, Input } from '@angular/core';
import { Contacto } from '../contacto/contacto.model';

@Component({
  selector: 'app-datos-contacto',
  templateUrl: './datos-contacto.component.html',
  styleUrls: ['./datos-contacto.component.scss'],
})
export class DatosContactoComponent{

  contacto:Contacto;

  constructor() { }


}
