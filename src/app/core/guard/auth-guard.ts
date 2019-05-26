import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AutenticationService } from '../../login/autentication.service';
import { ParseTreeResult } from '@angular/compiler';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AutenticationService,
    private router: Router
  ) { }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): boolean {

    if ( this.authService.isUsuarioAutenticado() ){
      return true;
    }

    this.router.navigate( ['/'] );

    return false;
  }
}
