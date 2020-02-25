import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { AppGridComponent } from './app-grid/app-grid.component';



@NgModule({
  declarations: [DashboardComponentComponent, LineChartComponent, AppGridComponent],
  imports: [
    CommonModule
  ]
})
export class ScorecaedDashboardModule { }
