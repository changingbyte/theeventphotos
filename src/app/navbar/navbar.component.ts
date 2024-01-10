import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faUser = faUser

  name = "Angular " + VERSION.major;

  constructor(private scroller: ViewportScroller, private router: Router) { }
  ngOnInit() {
    if (localStorage.getItem('authToken')) {
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

  isAuthenticated: boolean = false;

  login() {
    if (localStorage.getItem('authToken')) {
      this.isAuthenticated = true;
    }
  }

  logout() {
    this.isAuthenticated = false;
    localStorage.removeItem('authToken');
    localStorage.removeItem('Mobile_Number');
    this.router.navigate(['/']);
  }

}
