import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
      if(this.authenticationService.isUserLoggedIn())
      return true;
    
      //reroute to login
this.router.navigate(['login'])
    return false;
  }

}
