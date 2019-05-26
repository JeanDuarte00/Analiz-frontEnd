import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from '../../core/auth/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): boolean {

    if ( this.authService.isUsuarioAutenticado() ) {
      return true;
    } else {

      this.router.navigate( ['/login'] );

      return false;
    }

  }
}
