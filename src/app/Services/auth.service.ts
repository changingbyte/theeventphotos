import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { console.log("token : ", this.isLoggedIn) }

  isLoggedIn: boolean = false;
  login() {
    // Perform authentication logic, set isLoggedIn to true, and manage user tokens, etc.
    this.isLoggedIn = true;
    console.log("token logged in : ", this.isLoggedIn)
  }

  logout() {
    // Perform logout logic, clear tokens, reset state, etc.
    this.isLoggedIn = false;
    console.log("token logout : ", this.isLoggedIn)
  }
}
