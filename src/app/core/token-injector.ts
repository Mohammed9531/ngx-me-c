import {InjectionToken} from "@angular/core";
import * as Highcharts from 'highcharts';

declare var require: any

require('highcharts/modules/sankey')(Highcharts);

export function highchartFactory(){
  return Highcharts;
}

const HIGHCHART_TOKENS: InjectionToken<any> = new InjectionToken<any>('highchart');
const HIGHCHART_PROVIDER = { provide: HIGHCHART_TOKENS, useFactory: highchartFactory };

export { HIGHCHART_TOKENS, HIGHCHART_PROVIDER };
