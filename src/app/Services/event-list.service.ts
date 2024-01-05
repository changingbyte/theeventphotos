import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EventListService {

  constructor(private route: ActivatedRoute, private httpClient: HttpClient,) { }
  isLoading: boolean = true;
  event: any;
  event_list: any[] = [];
  ngOnInit(): void {
    this.event_list = [];
    this.eventList();
  }

  eventList() {
    const requestOptions = this.GetHeaders();
    this.httpClient
      .get(
        'https://helpful-range-403908.el.r.appspot.com/getHastagList/',
        requestOptions
      )
      .subscribe(
        (response) => {
          if (response) {
            this.event = response;
            this.event_list = this.event.data;
            this.isLoading = false;
            // console.log(this.event_list)
            // console.log(response)
          }
          // Handle the server's response
        },
        (error) => {
          // Handle any errors
        }
      );
  }

  GetHeaders() {
    const headerDict = {
      Authorization: 'Token ' + localStorage.getItem('authToken'),
    };
  
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return requestOptions;
  }
}
