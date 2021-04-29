import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario:Usuario;

  constructor() { }

  ngOnInit() { 
    //this.usuario = new Usuario();
  }

  onSubmit(registroFrom : NgForm){
    if (registroFrom.invalid) {
      return;
    }
    console.log('formulario enviado')
    console.log(this.usuario)
    console.log(registroFrom)
  }

}
