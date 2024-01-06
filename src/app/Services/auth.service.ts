import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { console.log("token : ", this.isLoggedIn) }

  get isLoggedIn() {
    if (localStorage.getItem('authToken')) {
      return true
    }
    return false
  }

}
