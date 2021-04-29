import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { FormTsComponent } from './components/form-ts/form-ts.component';
import { DestinoComponent } from './components/destino/destino.component';
import { PrimermodalComponent } from './modals/primermodal/primermodal.component';
import { AuthGuard } from './shared/guards/auth.guard';


const routes: Routes = [
  { path: 'home'    , component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'registro', component: RegistroComponent },
  { path: 'login'   , component: LoginComponent },
  { path: 'registroPorTs'   , component:  FormTsComponent},
  { path: 'destino'   , component:  DestinoComponent, canActivate: [AuthGuard] },
  { path: 'modal'   , component:  PrimermodalComponent},
  { path: '**', redirectTo: 'registroPorTs' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
