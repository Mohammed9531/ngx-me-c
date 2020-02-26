import { Component, OnInit } from '@angular/core';
import { MainService } from '../../core/main/main.service';
import { MonitoringData } from '../../core/main/main.model';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.scss']
})
export class DashboardComponentComponent implements OnInit {

  public scorecardData: MonitoringData[];

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.mainService.getScorecard().subscribe( res => {
      this.scorecardData = res;
    })
  }

}
