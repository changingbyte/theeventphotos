import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../Services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent {

  loginForm: FormGroup;

  constructor(private httpClient: HttpClient,private router: Router, private authservice: AuthenticationService, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      mobileNumber: ['', [Validators.required, Validators.pattern('[0-9]{10}')]]
    });
  }
  isRightPanelActive: boolean = false;
  // email: string = "";
  mobileNumber: string = '';
  otp: string = '';
  showOTPField: boolean = false;
  respnse_data: any;
  message: string = ''

  ngShow(){
    // console.log(this.email)
    console.log(this.mobileNumber)
  }

  onSubmit() {
    // Handle the login submission here
    const mobileNumberValue = this.loginForm.get('mobileNumber')?.value;
    console.log('Mobile Number:', mobileNumberValue);
    if (this.loginForm.valid) {
      this.message = ""
      console.log('Valid form submission');
    } else {
      // Handle invalid form submission or display error messages
      this.message = "Invalid Phone Number"
      console.log('Invalid form submission');
      return;
    }
    const data = {
      "Mobile": mobileNumberValue,
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
              localStorage.setItem('Mobile_Number', mobileNumberValue);
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
