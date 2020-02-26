import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { HighchartsChartModule } from 'highcharts-angular';

import { ScorecardDashboardRoutingModule } from './scorecard-dashboard-routing.module';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { AppGridComponent } from './app-grid/app-grid.component';
import { HIGHCHART_PROVIDER } from '../core/token-injector';



@NgModule({
  declarations: [
    DashboardComponentComponent,
    LineChartComponent,
    AppGridComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    HighchartsChartModule,
    ScorecardDashboardRoutingModule
  ],
  providers: [HIGHCHART_PROVIDER]
})
export class ScorecardDashboardModule { }
