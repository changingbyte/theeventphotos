import { Component } from '@angular/core';
import { faLaptopCode,faCloudArrowDown,faTableColumns,faNetworkWired,faChartLine } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent {
  faLaptopCode = faLaptopCode
  faCloudArrowDown = faCloudArrowDown
  faTableColumns=faTableColumns
  faNetworkWired=faNetworkWired
  faChartLine=faChartLine
  
}
