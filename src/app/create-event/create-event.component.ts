import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { EventListComponent } from '../event-list/event-list.component';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent {

  create_event = false;
  create_event_success=false;
  
  eventForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient,
    private formBuilder: FormBuilder,
    private app_component: AppComponent
    // private eventlist: EventListComponent
  ) {
    this.eventForm = this.formBuilder.group({
      eventName: ['', Validators.required],
      eventDate: ['', Validators.required],
      eventLocation: ['', Validators.required],
      eventHashtag: ['', Validators.required],
    });
  }

  ngOnInit(): void {      
        console.log("create event page");
        this.create_event = true;

      // You can now use this.productId in your component
  }

  onSubmit() {
    if (this.eventForm.valid) {
      // Handle form submission here
      console.log(this.eventForm.value);
      var data = {
        title: this.eventForm.value.eventName,
        is_published: true,
        date: this.eventForm.value.eventDate,
        venue: this.eventForm.value.eventLocation,
        event_id: this.eventForm.value.eventHashtag,
        last_updated_time: Date.now(),
        images: 0,
        app_id: this.app_component.APP_NAME,
        status: 'Event Created SuccessFully',
      };
      console.log(data);
      const requestOptions = GetHeaders();

      this.httpClient
        .post(
          'https://helpful-range-403908.el.r.appspot.com/Eventdetails',
          data,
          requestOptions
        )
        .subscribe(
          (response) => {
            // this.isLoading = false;
            if (response) {
              var response_data: any;
              response_data = response;
              var status_code = response_data.statusCode;

              if (status_code == 200) {
                // alert(response_data.data);
                // console.log(response)
                this.create_event_success=true;
                this.eventForm.reset();
              }
            }
            // Handle the server's response
          },
          (error) => {
            // Handle any errors
          }
        );
    }
  }

}
function GetHeaders() {
  const headerDict = {
    Authorization: 'Token ' + localStorage.getItem('authToken'),
  };

  const requestOptions = {
    headers: new HttpHeaders(headerDict),
  };
  return requestOptions;
}