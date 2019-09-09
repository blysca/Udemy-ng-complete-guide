import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }
  
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean>  | Promise<boolean> {
    return this.canActivate(childRoute, state);
  }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated()
      .then(
        (authenticated: boolean) => {
          if (authenticated) {
            console.log('*** true ');
            return true;
          } else {
            console.log('*** false ');
            this.router.navigate(['/']);
            return false;
          }
        }
      );
  }
  
}
