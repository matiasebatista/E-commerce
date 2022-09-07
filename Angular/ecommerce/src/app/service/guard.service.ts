import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticationServiceService } from './autentication-service.service';


@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {
  constructor(private autenticationServiceService : AutenticationServiceService ,private rutas:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let currentUser=this.autenticationServiceService.UsuarioAutenticado;
      if(currentUser != false){
        return true;
      }else{
        this.rutas.navigate(['/mainview'])
        return false;
      }
   
  }
}
