import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegistroComponent } from './pages/registro/registro.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { Usuario } from './models/usuario.model';
import { FormTsComponent } from './components/form-ts/form-ts.component';
import { DestinoComponent } from './components/destino/destino.component';
import { PrimermodalComponent } from './modals/primermodal/primermodal.component';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from './modals/confirm-modal/confirm-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    HomeComponent,
    LoginComponent,
    FormTsComponent,
    DestinoComponent,
    PrimermodalComponent,
    ConfirmModalComponent,
  ],
  entryComponents: [ConfirmModalComponent,PrimermodalComponent,],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
