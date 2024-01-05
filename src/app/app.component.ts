import { Component } from '@angular/core';
import { AuthenticationService } from './Services/auth.service';
// import { AuthenticationService } from 'auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor (public authSevice: AuthenticationService){}

  title = 'FotoFiesta';
  APP_NAME = 'PHOTOPHACTORYSTUDIOS'
}
