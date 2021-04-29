import { Component, Input, OnInit } from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-primermodal',
  templateUrl: './primermodal.component.html',
  styleUrls: ['./primermodal.component.css']
})
export class PrimermodalComponent{

  @Input() usuario:Usuario
}
