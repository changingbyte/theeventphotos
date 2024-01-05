import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../Services/auth.service';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent {

  constructor(private httpClient: HttpClient,private router: Router, private authservice: AuthenticationService) {}
  isRightPanelActive: boolean = false;
  // email: string = "";
  mobileNumber: string = '';
  otp: string = '';
  showOTPField: boolean = false;
  respnse_data: any;

  ngShow(){
    // console.log(this.email)
    console.log(this.mobileNumber)
  }

  onSubmit() {
    // Handle the login submission here
    console.log('Mobile Number:', this.mobileNumber);
    const data = {
      "Mobile":this.mobileNumber,
      "appString":"checkdvn"
    }
    this.showOTPField=true;
    this.httpClient.post('https://helpful-range-403908.el.r.appspot.com/users/mobile_number_check',data).subscribe(
      (response) => {
        if(response){
          
          if(this.otp && this.otp!='')
          {
           
              this.respnse_data = response;
              console.log(this.respnse_data.data)
              if (this.otp == this.respnse_data.otp)
              {
              alert('congratulations')
              this.authservice.login();
              localStorage.setItem('authToken', this.respnse_data.auth_token);
              localStorage.setItem('Mobile_Number', this.mobileNumber);
              this.router.navigate(['admin/dashboard/event_list']); 
              }
          }
          
        }
        // Handle the server's response
        
      },
      (error) => {
        // Handle any errors
      }
    );
    
    // Add your authentication logic here
  }

  onSignUpClick() {
    this.isRightPanelActive = true;
  }

  onSignInClick() {
    this.isRightPanelActive = false;
  }

}
