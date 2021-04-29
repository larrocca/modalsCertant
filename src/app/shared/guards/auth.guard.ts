import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})//Es un servicio
export class AuthGuard implements CanActivate { 

  constructor(private router : Router){

  }
  canActivate():boolean{
    if (localStorage.getItem('usuario')) {
      return true;
    }
    else{
      this.router.navigate(['/registroPorTs'])
    }
  }
}
