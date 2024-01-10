import { Component } from '@angular/core';
import { AuthenticationService } from '../Services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent {
  subscription: any;
  subscriptionList: any[] = [];
  constructor(private httpClient: HttpClient, private router: Router, private authService: AuthenticationService) {
    // this.getSubscriptionDetail()
    // this.subscription = [];
  }

  isAuthenticated = this.authService.isLoggedIn;
  response_data: any;
  subscriptionListResponse:any;
  // subscription: {};
  // subscription: any[] = [];
  // subscription: [];
  ngOnInit(): void {
    // this.subscription=[]
    // this.getActiveSubscriptionDetail()
    this.getSubscriptionDetail()
  }
  // getActiveSubscriptionDetail() {
  //   // Handle the login submission here
  //   const mobileNumberValue = localStorage.getItem('Mobile_Number')
  //   console.log('Mobile Number:', mobileNumberValue);

  //   const data = {
  //     "Mobile": mobileNumberValue,
  //     "appString": "checkdvn"
  //   }
  //   this.httpClient.post('https://helpful-range-403908.el.r.appspot.com/users/mobile_number_check', data).subscribe(
  //     (response) => {
  //       if (response) {
  //         this.response_data = response;
  //         console.log(this.response_data)
  //         this.subscription= this.response_data.subscription || []
  //         // console.log(this.subscription)
  //         console.log('Type of subscription:', typeof this.subscription);
  //         // this.subscription.push(this.response_data.subscription);
  //         // this.subscription = response.subscription;

  //       }
  //       // Handle the server's response

  //     },
  //     (error) => {
  //       // Handle any errors
  //     }
  //   );
  //   // this.subscription =  this.respnse_data.subscription




  //   // Add your authentication logic here
  // }
  getSubscriptionDetail(){
    this.httpClient.get('https://helpful-range-403908.el.r.appspot.com/subscription-list/').subscribe(
      (response) => {
        if (response) {
          this.subscriptionListResponse = response;
          this.subscriptionList = this.subscriptionListResponse.data
          console.log(this.subscriptionListResponse)
          console.log("subscription list"+this.subscriptionList)
          

        }
        // Handle the server's response

      },
      (error) => {
        // Handle any errors
      }
    );
    // this.subscription =  this.respnse_data.subscription




    // Add your authentication logic here
  }

}
