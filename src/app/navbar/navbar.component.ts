import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { faUser, faCircleUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { CommonScrollingService } from '../Services/common-scrolling.service';
import { UsersDataService } from '../Services/users-data.service';

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
  // activeSubscription: any[] = [];
  subscriptionName: String = ""
  constructor(private scroller: ViewportScroller, private router: Router, public commonScroller: CommonScrollingService, private userDataService: UsersDataService) { }
  ngOnInit() {
    if (localStorage.getItem('authToken')) {
      this.isAuthenticated = true;
    }
    // this.router.navigate(["/"]);
    // this.activeSubscription = this.userData.activeSubscription
    if (this.userDataService.activeSubscription.length>0){
      this.subscriptionName = this.userDataService.activeSubscription[0].name
    }
    
    if (this.subscriptionName.length == 0) {
      console.log("Empty active subscription list")
      this.userDataService.userData();
      this.userDataService.activeSubscription$.subscribe((activeSubscription) => {
        if (activeSubscription.length > 0) {
          this.subscriptionName = activeSubscription[0].name
        }
      });

    }

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
