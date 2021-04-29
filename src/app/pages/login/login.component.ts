import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario:Usuario;

  constructor() { }

  ngOnInit() {
    //this.usuario = new Usuario;
  }

  logearse(loginForm: NgForm){
    console.log(loginForm)
  }
}
