import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PrimermodalComponent } from '../../modals/primermodal/primermodal.component';
import { Router } from '@angular/router';
import { ConfirmModalComponent } from '../../modals/confirm-modal/confirm-modal.component';


@Component({
  selector: 'app-destino',
  templateUrl: './destino.component.html',
  styleUrls: ['./destino.component.css']
})
export class DestinoComponent implements OnInit {
  
  usuario:Usuario

  constructor(
    private _modalService : NgbModal,
    private router : Router
  ) { 
    
  }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem("usuario"))
    this.modalDatos()
    console.log(this.usuario)
  }

  modalDatos(){
    const modalRef = this._modalService.open(PrimermodalComponent)
    modalRef.componentInstance.usuario= this.usuario.nombre
  }
   

  borrarLocalStorage(){
    console.log('funciona')
    localStorage.removeItem('usuario');
    this.router.navigate(['/registroPorTs'])
  }

}
