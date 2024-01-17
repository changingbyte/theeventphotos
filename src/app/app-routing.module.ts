import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FeaturesComponent } from './features/features.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { EventListComponent } from './event-list/event-list.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { UploadComponent } from './upload/upload.component';
import { UserEventRegisteredComponent } from './user-event-registered/user-event-registered.component';
import { PricesComponent } from './prices/prices.component';

const routes: Routes = [
  { path: '', component: NavbarComponent },
  { path: 'register', component: RegisterationComponent },
  {
    path: 'admin', canActivate: [AuthGuard],
    children: [
      // { path: 'dashboard', component: DashboardComponent },
      {
        path: 'dashboard', children: [
          { path: 'event_list', component: EventListComponent },
          { path: 'pricing', component: PricesComponent },
          { path: 'event_list/:event_id', component: EventListComponent },
          { path: 'event_list/:event_id/user_event_registered', component: UserEventRegisteredComponent },
          { path: 'create_event', component: CreateEventComponent },
          { path: 'upload_image', component: UploadComponent },
        ]
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
