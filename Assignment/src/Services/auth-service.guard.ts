import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { ApiCallsService } from './api-calls.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceGuard implements CanActivate {
  constructor(private apiService : ApiCallsService,private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot):  boolean {
    if(this.apiService.loggedIn){
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
  
}
