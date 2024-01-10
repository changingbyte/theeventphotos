import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class EventListService {
  // isLoading: boolean = true;

  private _eventListSubject = new BehaviorSubject<any[]>([]);
  eventList$ = this._eventListSubject.asObservable();

  private _eventSubject = new BehaviorSubject<any>(null);
  event$ = this._eventSubject.asObservable();

  event: any;
  event_list: any[] = [];
  constructor(private route: ActivatedRoute, private httpClient: HttpClient,private appComponent:AppComponent) {
    // this.eventList()
    // this.getEventList
  }

  eventList() {
    const requestOptions = GetHeaders();
    this.httpClient
      .get(
        this.appComponent.base_url+'getUserEvents/',
        requestOptions
      )
      .subscribe(
        (response) => {
          if (response) {
            this.event = response;
            this.event_list = this.event.data;
            // this.isLoading = false;
            console.log("event list : ",this.event_list)
            this._eventListSubject.next(this.event_list);
            this._eventSubject.next(this.event);
            // console.log(response)
          }
          // Handle the server's response
        },
        (error) => {
          // Handle any errors
        }
      );
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