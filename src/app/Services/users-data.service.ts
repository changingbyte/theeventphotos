import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { }

  responseData: any;
  event_list: any[] = [];
  activeSubscription:any[]=[];

  set setUserData(response_data: any) {
    console.log(" reponse data from Service" ,response_data)
    this.responseData = response_data
    this.event_list = response_data.my_events
    console.log("event List from service",this.event_list)
    this.activeSubscription = response_data.subscription
    console.log("subscription from service",this.activeSubscription)
  }
}
