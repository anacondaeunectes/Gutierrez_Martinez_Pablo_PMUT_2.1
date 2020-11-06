import { Component, Input } from '@angular/core';
import { Contacto } from './contacto.model';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
})
export class ContactoComponent {

  @Input() 
  contacto: Contacto;

  constructor() { }

}
