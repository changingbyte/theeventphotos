import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './Services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthenticationService, private router: Router) {}

  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // if (this.authService.isLoggedIn) {
    //    return true;
    // } else {
    //    this.router.navigate(["/register"]);
    //    return false;
    // }

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
