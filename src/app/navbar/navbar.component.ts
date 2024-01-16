import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { faUser, faCircleUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { CommonScrollingService } from '../Services/common-scrolling.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faUser = faUser
  faCircleUser = faCircleUser
  faBars = faBars

  name = "Angular " + VERSION.major;

  constructor(private scroller: ViewportScroller, private router: Router, public commonScroller: CommonScrollingService) { }
  ngOnInit() {
    if (localStorage.getItem('authToken')) {
      this.isAuthenticated = true;
    }
    // this.router.navigate(["/"]);
  }

  title = 'FotoFiesta';
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
