import { Component, EventEmitter, Output } from '@angular/core';
import { AppComponent } from '../app.component';
import { faBars, faPlus, faList, faUpload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  faBars = faBars
  faPlus = faPlus
  faList = faList
  faUpload = faUpload
  constructor(public appcomponent : AppComponent) {}
}
