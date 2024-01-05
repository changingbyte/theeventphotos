import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventListService } from '../Services/event-list.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent {

  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient, private eventListService: EventListService
  ) {}

  productId: any;
  image: any;
  image_list: any[] = [];
  tag_list: any[] = [];
 
  event: any;
  event_list: any[] = [];
  isLoading: boolean = true;

  ngOnInit(): void {
    this.image_list = [];
    this.tag_list = [];

    this.route.params.subscribe((params) => {
      
      this.productId = params['event_id'] || null; // Access the 'id' route parameter
      if (this.route.snapshot.url.length == 1) {
        
        console.log("Event List Page");
        this.eventList();
      } else {
        this.downloadFiles(this.productId);
      }
    });
  }

  eventList() {
    const requestOptions = GetHeaders();
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

  downloadFiles(event_name: string) {
    const data = { folder_name: event_name, user_id: '8000802034' };
    const requestOptions = GetHeaders();

    this.httpClient
      .post(
        'https://helpful-range-403908.el.r.appspot.com/downloadFroms3/',
        data,
        requestOptions
      )
      .subscribe(
        (response) => {
          if (response) {
            this.image = response;
            this.image_list = this.image.data;
            this.tag_list = this.image.tags_list;
            this.isLoading = false;
          }
          // Handle the server's response
        },
        (error) => {
          // Handle any errors
        }
      );
  }

  convertEpochToDateTime(epochTimestamp: number): string {
    const now = Math.floor(Date.now() / 1000); // Current time in seconds
    const diff = now - epochTimestamp;

    if (diff < 60) {
      return `${diff} second${diff > 1 ? 's' : ''} ago`;
    } else if (diff < 3600) {
      const minutes = Math.floor(diff / 60);
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else if (diff < 86400) {
      const hours = Math.floor(diff / 3600);
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (diff < 2592000) {
      // 30 days, less than one month
      const days = Math.floor(diff / 86400);
      return `${days} day${days > 1 ? 's' : ''} ago`;
    } else {
      const months = Math.floor(diff / 2592000); // 30 days per month
      return `${months} month${months > 1 ? 's' : ''} ago`;
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