import { ViewportScroller } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonScrollingService {

  constructor(private scroller: ViewportScroller) { }

  goToPricing() {
    this.scroller.scrollToAnchor("pricing_id");
  }
  goToCustomer() {
    this.scroller.scrollToAnchor("customer_id");
  }
  goToFeatures() {
    this.scroller.scrollToAnchor("features_id");
  }
}
