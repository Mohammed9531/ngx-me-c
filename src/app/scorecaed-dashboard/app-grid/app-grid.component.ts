import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MonitoringData, LineChart } from '../../core/main/main.model';

@Component({
  selector: 'app-app-grid',
  templateUrl: './app-grid.component.html',
  styleUrls: ['./app-grid.component.scss']
})
export class AppGridComponent implements OnInit {

  @Input() scData: MonitoringData;

  constructor() { }

  ngOnInit() {
    
  }

  ngOnChanges() {
    if(this.scData) {
      console.log('scdata', this.scData)
    }
  }

}
