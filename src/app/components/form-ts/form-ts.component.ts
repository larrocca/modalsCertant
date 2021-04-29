import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from  '@angular/forms'
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario.model';
import { ValidationResult, PasswordValidator } from '../../models/validation-result';
import { NgbModal, NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { PrimermodalComponent } from '../../modals/primermodal/primermodal.component';
import { ConfirmModalComponent } from '../../modals/confirm-modal/confirm-modal.component';
import { async } from '@angular/core/testing';


@Component({
  selector: 'app-form-ts',
  templateUrl: './form-ts.component.html',
  styleUrls: ['./form-ts.component.css']
})
export class FormTsComponent implements OnInit {

  formularioPorTs:FormGroup
  usuario:Usuario
  isValid:boolean=true
  validModal: boolean = false
  modalComponent: PrimermodalComponent
  resultadoModal: NgbActiveModal

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _modalService: NgbModal
  ) { }

  ngOnInit() {
    console.log('se refresco la pagina')
    this.formularioPorTs = this._formBuilder.group({
      email: ['',[Validators.required,Validators.email]],
      nombre:['',[Validators.required,Validators.minLength(3)]],
      contrasena:['',[Validators.required,
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]
    ],
    })
  }

   checkModal(){
    const modalRef = this._modalService.open(ConfirmModalComponent)
    modalRef.result
      .then(async respuesta => {
      //this.validarDatos()
      }
      )
      .catch(() => { }); //Tiene dos resultados porque es una promesa, al confirmar seria el resultado true, y ejecutaria validardatos(), y ser false , ejecutaria el catch que en este caso no ejecuta nada
}

  validarDatos(){
    let email = this.formularioPorTs.controls['email'].value
    let contrasena = this.formularioPorTs.controls['contrasena'].value
    let nombre = this.formularioPorTs.controls['nombre'].value

    if (this.formularioPorTs.valid) {
      this.usuario = new Usuario(email,contrasena,nombre)
      localStorage.setItem("usuario",JSON.stringify(this.usuario))
      this._router.navigate(['/destino'])
    }
  }

  get controls(){
    return this.formularioPorTs.controls;
  }
}
