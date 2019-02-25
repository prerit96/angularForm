import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, RouterModule, Router } from '@angular/router';
import { SessionService } from '../Service/session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private session: SessionService, private router: Router) {}
  canActivate()
  {
    if(this.session.getLoggedIn()) {      
      return true;
    }
    else {
    this.router.navigate(['/login']);
    }
  }
}
