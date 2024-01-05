import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { AuthGuard } from '../auth.guard';
import { AuthenticationService } from '../Services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faUser = faUser

  name = "Angular " + VERSION.major;

  constructor(private scroller: ViewportScroller, private router: Router, public authService: AuthenticationService, public authguard: AuthGuard) {}
  ngOnInit() {
    if (localStorage.getItem('authToken')){
      this.isAuthenticated = true;
    }
    // this.router.navigate(["/"]);
  }
  
  title = 'FotoFiesta';

  goDownToFeature() {
    console.log("Hello")
    const element = document.getElementById("features_id");
    console.log(element)
    if (element) {
      console.log("Hello world")
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }
  }

  goDownToPricing() {
    this.scroller.scrollToAnchor("pricing_id");
  }

  goDownToCustomer() {
    this.scroller.scrollToAnchor("customer_id");
  }

  // onLoginClick() {
  //   this.authService.login();
  // }

  // onLogoutClick() {
  //   this.authService.logout();
  // }

  isAuthenticated: boolean = false;


  // ngOnInit(): void {
  //   if (localStorage.getItem('authToken'))
  //   this.isAuthenticated = true;
  // }


  login() {
    // Simulate a login action or set isAuthenticated to true
    if (localStorage.getItem('authToken'))
    this.isAuthenticated = true;
  }

  logout() {
    // Simulate a logout action or set isAuthenticated to false
    this.isAuthenticated = false;
    localStorage.removeItem('authToken');
    this.router.navigate(['/']);

  }
  
}
