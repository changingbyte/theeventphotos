import { Component } from '@angular/core';
import { AuthenticationService } from '../Services/auth.service';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent {
  constructor(private authService: AuthenticationService) {

  }

  isAuthenticated = this.authService.isLoggedIn;

}
