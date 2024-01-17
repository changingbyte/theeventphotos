import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonScrollingService } from '../Services/common-scrolling.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent {
  constructor(public commonScroller : CommonScrollingService) {}
}
