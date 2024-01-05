import { Component, OnInit} from '@angular/core';
import { faPlus, faList, faUpload } from '@fortawesome/free-solid-svg-icons';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  faPlus = faPlus
  faList = faList
  faUpload = faUpload
  constructor (private router: Router) {}
  
  navigateToCreateEvent() {
    console.log("create event button");
    this.router.navigate(['admin/dashboard/create_event']);
  }

  navigateToEventList(){
    console.log("event list");
    this.router.navigate(['admin/dashboard/event_list']);
  }

  navigateToUploadImage(){
    console.log("event list");
    this.router.navigate(['admin/dashboard/upload_image']);
  }
  
}
