import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { EventListService } from '../Services/event-list.service';
import { ActivatedRoute, Route } from '@angular/router';
import { faSearchPlus, faPencil, faTrash, faSquare, fa2, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-user-event-registered',
  templateUrl: './user-event-registered.component.html',
  styleUrls: ['./user-event-registered.component.css']
})
export class UserEventRegisteredComponent {
  faSearchPlus = faSearchPlus
  faPencil = faPencil
  faTrash = faTrash
  faSquare = faSquare
  fa2 = fa2
  faChevronLeft = faChevronLeft
  faChevronRight = faChevronRight
  register_user:any
  registeredUsers: any[] = [];
  productId: any;
  constructor(private httpClient: HttpClient, private route: ActivatedRoute,private appComponent:AppComponent) {

  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      
      this.productId = params['event_id'] || null; // Access the 'id' route parameter
      

      if (this.productId) {
        this.registeredUserList(this.productId)
        console.log(this.registeredUsers)
      }
    });
  }

  registeredUserList(event_id:string) {
    const requestOptions = GetHeaders()
    this.httpClient
      .get(
        this.appComponent.base_url+'user-list/'+event_id+"/",
        requestOptions
      )
      .subscribe(
        (response) => {
          if (response) {
            this.register_user = response;

            this.registeredUsers = this.register_user.data;
            // this.register_user.data.forEach((element: { user_id: any; }) => {
            //   this.registeredUsers.push(element.user_id)
            // });
            console.log(this.registeredUsers)
            
            
          }
   
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