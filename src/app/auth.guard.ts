import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    var userIsAuthenticated = false
    if (localStorage.getItem('authToken'))
    {
      userIsAuthenticated = true;
      
    }

    if (userIsAuthenticated) { // Replace with your authentication check
      console.log(" logged in", userIsAuthenticated);
      return true;
    } else {
      this.router.navigate(['/register']); // Redirect to the login page
      console.log(" logged out", userIsAuthenticated);
      return false;
    }
 }
  
}
