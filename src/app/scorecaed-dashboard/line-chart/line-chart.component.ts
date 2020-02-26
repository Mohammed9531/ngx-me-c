import { Component, Inject, Input, OnInit, OnChanges } from '@angular/core';
import { HIGHCHART_TOKENS } from '../../core/token-injector';
import { LineChart } from '../../core/main/main.model';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  chartOptions: any;
  chartData: LineChart[];
  chart: Highcharts.Chart;

  @Input() set chartDataInfo(chartDataInfo: LineChart[]) {
    this.chartData = chartDataInfo;

    if (!this.chartOptions) {
      this.loadChart();
    }

    if (this.chartData) {
      if (this.chartOptions.series && this.chartOptions.series.length) {
        for (let i = 0 ; i < this.chartOptions.series.length; i++) {
          if (this.chartData.length > i && this.chartData[i] && this.chartData[i]) {
            const series1 = this.chartOptions.series[i] as any;
            series1.data = Object.assign([], this.chartData[i]);
          }
        }
        if (this.chart) {
          this.chart.update(this.chartOptions, true);
        }
      }
    }
  }

  constructor(@Inject(HIGHCHART_TOKENS) public Highcharts: any) { }

  ngOnInit() {
    // console.log('Line chart loaded...');
  }
  ngOnChanges() {
    this.loadChart();
  }

  setChartInstance(e: any): void {
    // console.log(e);
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
      series: this.chartData,
    };
  }

}
