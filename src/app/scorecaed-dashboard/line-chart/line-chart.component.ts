import { Component, Inject, Input, OnInit } from '@angular/core';
import { HIGHCHART_TOKENS } from '../../core/token-injector';
import { LineChart } from '../../core/main/main.model';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  chartOptions: any;
  chartData: any[];
  chart: Highcharts.Chart;

  @Input() set chartDataInfo(chartDataInfo: LineChart[]) {
    if (Array.isArray(chartDataInfo)) {
      this.chartData = chartDataInfo.map(i => i.metricvalue);
    }

    if (!this.chartOptions) {
      this.loadChart();
    }
  }

  constructor(@Inject(HIGHCHART_TOKENS) public Highcharts: any) { }

  ngOnInit() {
    // console.log('Line chart loaded...');
  }

  loadChart() {
    this.chartOptions = {
      colors: ['red'],
      chart: {
        animation: false,
        backgroundColor: null,
        margin: 0
      },
      tooltip: {},
      title: {
        text: ''
      },
      credits: {
        enabled: false
      },
      xAxis: {
        labels: {
          enabled: false
        },
        title: {
          text: null
        },
        lineWidth: 0,
        minorGridLineWidth: 0,
        lineColor: 'transparent',
        minorTickLength: 0,
        tickLength: 0
      },
      yAxis: {
        labels: {
          enabled: false
        },
        title: {
          text: null
        },
        startOnTick: false,
        endOnTick: false,
        tickPositions: [],
        gridLineWidth: 0
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        line: {
          marker: {
            enabled: false
          }
        }
      },
      series: [
        {
          type: "line",
          data: this.chartData
        }
      ],
    };
  }

}
