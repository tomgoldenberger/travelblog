import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticateService } from './authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(public authenticateservice: AuthenticateService, public router: Router) { }

  canActivate(): boolean {
    if (localStorage.token != null) {
      return true;
    }
    else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
