import { Component, OnInit } from "@angular/core";
import { MainService } from "../../core/main/main.service";
import { MonitoringData } from "../../core/main/main.model";

@Component({
  selector: "app-dashboard-component",
  templateUrl: "./dashboard-component.component.html",
  styleUrls: ["./dashboard-component.component.scss"]
})
export class DashboardComponentComponent implements OnInit {
  public scorecardData: any[];

  constructor(private mainService: MainService) {}

  ngOnInit() {
    this.mainService.getScorecard().subscribe( res => {
      this.scorecardData = res;
    });

    // this.scorecardData = [
    //   {
    //     groupname: "David J Lunglhofer",
    //     grouptype: "CIO",
    //     grouplettergrade: "A",
    //     groupnumericgrade: 9.8,
    //     groupcolor: "GREEN",
    //     metrics: [
    //       {
    //         metric:
    //           "% of Moog Events Acknowledged in under 5 mins over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric:
    //           "% of all P1-P3 Incidents Resolved in less than 2 Hours over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "Cloudprober Monitor to MNE Ratio � 10:1",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of MNE On-boarded to Drift with Zero Drift Tickets",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Applications on AppDynamics (minus overrides)",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Servers that prom monitors as up",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     groupname: "Gerald J Verrilli",
    //     grouptype: "CIO",
    //     grouplettergrade: "A",
    //     groupnumericgrade: 9.9,
    //     groupcolor: "GREEN",
    //     metrics: [
    //       {
    //         metric:
    //           "% of Moog Events Acknowledged in under 5 mins over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric:
    //           "% of all P1-P3 Incidents Resolved in less than 2 Hours over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "Cloudprober Monitor to MNE Ratio � 10:1",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of MNE On-boarded to Drift with Zero Drift Tickets",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Applications on AppDynamics (minus overrides)",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Servers that prom monitors as up",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     groupname: "Joseph W Sieczkowski",
    //     grouptype: "CIO",
    //     grouplettergrade: "A",
    //     groupnumericgrade: 9.9,
    //     groupcolor: "GREEN",
    //     metrics: [
    //       {
    //         metric:
    //           "% of Moog Events Acknowledged in under 5 mins over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric:
    //           "% of all P1-P3 Incidents Resolved in less than 2 Hours over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "Cloudprober Monitor to MNE Ratio � 10:1",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of MNE On-boarded to Drift with Zero Drift Tickets",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Applications on AppDynamics (minus overrides)",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Servers that prom monitors as up",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     groupname: "Anthony M Iannucci",
    //     grouptype: "CIO",
    //     grouplettergrade: "A",
    //     groupnumericgrade: 9.9,
    //     groupcolor: "GREEN",
    //     metrics: [
    //       {
    //         metric:
    //           "% of Moog Events Acknowledged in under 5 mins over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric:
    //           "% of all P1-P3 Incidents Resolved in less than 2 Hours over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "Cloudprober Monitor to MNE Ratio � 10:1",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of MNE On-boarded to Drift with Zero Drift Tickets",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Applications on AppDynamics (minus overrides)",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Servers that prom monitors as up",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     groupname: "James J Deperna",
    //     grouptype: "CIO",
    //     grouplettergrade: "A",
    //     groupnumericgrade: 9.9,
    //     groupcolor: "GREEN",
    //     metrics: [
    //       {
    //         metric:
    //           "% of Moog Events Acknowledged in under 5 mins over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric:
    //           "% of all P1-P3 Incidents Resolved in less than 2 Hours over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "Cloudprober Monitor to MNE Ratio � 10:1",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of MNE On-boarded to Drift with Zero Drift Tickets",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Applications on AppDynamics (minus overrides)",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Servers that prom monitors as up",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     groupname: "Michael P Mavrich",
    //     grouptype: "CIO",
    //     grouplettergrade: "A",
    //     groupnumericgrade: 9.9,
    //     groupcolor: "GREEN",
    //     metrics: [
    //       {
    //         metric:
    //           "% of Moog Events Acknowledged in under 5 mins over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric:
    //           "% of all P1-P3 Incidents Resolved in less than 2 Hours over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "Cloudprober Monitor to MNE Ratio � 10:1",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of MNE On-boarded to Drift with Zero Drift Tickets",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Applications on AppDynamics (minus overrides)",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Servers that prom monitors as up",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     groupname: "Sherwin Content",
    //     grouptype: "CIO",
    //     grouplettergrade: "A",
    //     groupnumericgrade: 9.9,
    //     groupcolor: "GREEN",
    //     metrics: [
    //       {
    //         metric:
    //           "% of Moog Events Acknowledged in under 5 mins over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric:
    //           "% of all P1-P3 Incidents Resolved in less than 2 Hours over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "Cloudprober Monitor to MNE Ratio � 10:1",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of MNE On-boarded to Drift with Zero Drift Tickets",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Applications on AppDynamics (minus overrides)",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Servers that prom monitors as up",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     groupname: "En K Cho",
    //     grouptype: "CIO",
    //     grouplettergrade: "A",
    //     groupnumericgrade: 9.9,
    //     groupcolor: "GREEN",
    //     metrics: [
    //       {
    //         metric:
    //           "% of Moog Events Acknowledged in under 5 mins over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric:
    //           "% of all P1-P3 Incidents Resolved in less than 2 Hours over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "Cloudprober Monitor to MNE Ratio � 10:1",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of MNE On-boarded to Drift with Zero Drift Tickets",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Applications on AppDynamics (minus overrides)",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Servers that prom monitors as up",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     groupname: "Geoffrey R Massam",
    //     grouptype: "CIO",
    //     grouplettergrade: "A",
    //     groupnumericgrade: 9.9,
    //     groupcolor: "GREEN",
    //     metrics: [
    //       {
    //         metric:
    //           "% of Moog Events Acknowledged in under 5 mins over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric:
    //           "% of all P1-P3 Incidents Resolved in less than 2 Hours over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "Cloudprober Monitor to MNE Ratio � 10:1",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of MNE On-boarded to Drift with Zero Drift Tickets",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Applications on AppDynamics (minus overrides)",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Servers that prom monitors as up",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     groupname: "Mark D Gibbons",
    //     grouptype: "CIO",
    //     grouplettergrade: "A",
    //     groupnumericgrade: 9.9,
    //     groupcolor: "GREEN",
    //     metrics: [
    //       {
    //         metric:
    //           "% of Moog Events Acknowledged in under 5 mins over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric:
    //           "% of all P1-P3 Incidents Resolved in less than 2 Hours over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "Cloudprober Monitor to MNE Ratio � 10:1",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of MNE On-boarded to Drift with Zero Drift Tickets",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Applications on AppDynamics (minus overrides)",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Servers that prom monitors as up",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     groupname: "Ramaswamy Nagappan",
    //     grouptype: "CIO",
    //     grouplettergrade: "A",
    //     groupnumericgrade: 9.9,
    //     groupcolor: "GREEN",
    //     metrics: [
    //       {
    //         metric:
    //           "% of Moog Events Acknowledged in under 5 mins over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric:
    //           "% of all P1-P3 Incidents Resolved in less than 2 Hours over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "Cloudprober Monitor to MNE Ratio � 10:1",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of MNE On-boarded to Drift with Zero Drift Tickets",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Applications on AppDynamics (minus overrides)",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Servers that prom monitors as up",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     groupname: "Nancy D Reyda",
    //     grouptype: "CIO",
    //     grouplettergrade: "A",
    //     groupnumericgrade: 9.9,
    //     groupcolor: "GREEN",
    //     metrics: [
    //       {
    //         metric:
    //           "% of Moog Events Acknowledged in under 5 mins over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric:
    //           "% of all P1-P3 Incidents Resolved in less than 2 Hours over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "Cloudprober Monitor to MNE Ratio � 10:1",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of MNE On-boarded to Drift with Zero Drift Tickets",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Applications on AppDynamics (minus overrides)",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Servers that prom monitors as up",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     groupname: "Ralph H Groce III",
    //     grouptype: "CIO",
    //     grouplettergrade: "A",
    //     groupnumericgrade: 9.9,
    //     groupcolor: "GREEN",
    //     metrics: [
    //       {
    //         metric:
    //           "% of Moog Events Acknowledged in under 5 mins over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric:
    //           "% of all P1-P3 Incidents Resolved in less than 2 Hours over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "Cloudprober Monitor to MNE Ratio � 10:1",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of MNE On-boarded to Drift with Zero Drift Tickets",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Applications on AppDynamics (minus overrides)",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Servers that prom monitors as up",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     groupname: "Mahesh Pakianathan",
    //     grouptype: "CIO",
    //     grouplettergrade: "A",
    //     groupnumericgrade: 9.9,
    //     groupcolor: "GREEN",
    //     metrics: [
    //       {
    //         metric:
    //           "% of Moog Events Acknowledged in under 5 mins over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric:
    //           "% of all P1-P3 Incidents Resolved in less than 2 Hours over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "Cloudprober Monitor to MNE Ratio � 10:1",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of MNE On-boarded to Drift with Zero Drift Tickets",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Applications on AppDynamics (minus overrides)",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Servers that prom monitors as up",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     groupname: "Taranath K Kunder",
    //     grouptype: "CIO",
    //     grouplettergrade: "A",
    //     groupnumericgrade: 9.9,
    //     groupcolor: "GREEN",
    //     metrics: [
    //       {
    //         metric:
    //           "% of Moog Events Acknowledged in under 5 mins over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric:
    //           "% of all P1-P3 Incidents Resolved in less than 2 Hours over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "Cloudprober Monitor to MNE Ratio � 10:1",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of MNE On-boarded to Drift with Zero Drift Tickets",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Applications on AppDynamics (minus overrides)",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Servers that prom monitors as up",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     groupname: "Jeffrey Lucas",
    //     grouptype: "CIO",
    //     grouplettergrade: "A",
    //     groupnumericgrade: 9.9,
    //     groupcolor: "GREEN",
    //     metrics: [
    //       {
    //         metric:
    //           "% of Moog Events Acknowledged in under 5 mins over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric:
    //           "% of all P1-P3 Incidents Resolved in less than 2 Hours over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "Cloudprober Monitor to MNE Ratio � 10:1",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of MNE On-boarded to Drift with Zero Drift Tickets",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Applications on AppDynamics (minus overrides)",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Servers that prom monitors as up",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     groupname: "Saket Sharma",
    //     grouptype: "CIO",
    //     grouplettergrade: "A",
    //     groupnumericgrade: 9.9,
    //     groupcolor: "GREEN",
    //     metrics: [
    //       {
    //         metric:
    //           "% of Moog Events Acknowledged in under 5 mins over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric:
    //           "% of all P1-P3 Incidents Resolved in less than 2 Hours over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "Cloudprober Monitor to MNE Ratio � 10:1",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of MNE On-boarded to Drift with Zero Drift Tickets",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Applications on AppDynamics (minus overrides)",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Servers that prom monitors as up",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     groupname: "Sarthak Pattanaik",
    //     grouptype: "CIO",
    //     grouplettergrade: "A",
    //     groupnumericgrade: 9.9,
    //     groupcolor: "GREEN",
    //     metrics: [
    //       {
    //         metric:
    //           "% of Moog Events Acknowledged in under 5 mins over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric:
    //           "% of all P1-P3 Incidents Resolved in less than 2 Hours over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "Cloudprober Monitor to MNE Ratio � 10:1",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of MNE On-boarded to Drift with Zero Drift Tickets",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Applications on AppDynamics (minus overrides)",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Servers that prom monitors as up",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     groupname: "Gunavardhan Nimmagadda",
    //     grouptype: "CIO",
    //     grouplettergrade: "A",
    //     groupnumericgrade: 9.9,
    //     groupcolor: "GREEN",
    //     metrics: [
    //       {
    //         metric:
    //           "% of Moog Events Acknowledged in under 5 mins over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric:
    //           "% of all P1-P3 Incidents Resolved in less than 2 Hours over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "Cloudprober Monitor to MNE Ratio � 10:1",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of MNE On-boarded to Drift with Zero Drift Tickets",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Applications on AppDynamics (minus overrides)",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Servers that prom monitors as up",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     groupname: "Joseph McGauley",
    //     grouptype: "CIO",
    //     grouplettergrade: "A",
    //     groupnumericgrade: 9.9,
    //     groupcolor: "GREEN",
    //     metrics: [
    //       {
    //         metric:
    //           "% of Moog Events Acknowledged in under 5 mins over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric:
    //           "% of all P1-P3 Incidents Resolved in less than 2 Hours over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "Cloudprober Monitor to MNE Ratio � 10:1",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of MNE On-boarded to Drift with Zero Drift Tickets",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Applications on AppDynamics (minus overrides)",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Servers that prom monitors as up",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     groupname: "Kin Ling Chui",
    //     grouptype: "CIO",
    //     grouplettergrade: "A",
    //     groupnumericgrade: 9.9,
    //     groupcolor: "GREEN",
    //     metrics: [
    //       {
    //         metric:
    //           "% of Moog Events Acknowledged in under 5 mins over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric:
    //           "% of all P1-P3 Incidents Resolved in less than 2 Hours over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "Cloudprober Monitor to MNE Ratio � 10:1",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of MNE On-boarded to Drift with Zero Drift Tickets",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Applications on AppDynamics (minus overrides)",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Servers that prom monitors as up",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     groupname: "Michael Boccio",
    //     grouptype: "CIO",
    //     grouplettergrade: "A",
    //     groupnumericgrade: 9.9,
    //     groupcolor: "GREEN",
    //     metrics: [
    //       {
    //         metric:
    //           "% of Moog Events Acknowledged in under 5 mins over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric:
    //           "% of all P1-P3 Incidents Resolved in less than 2 Hours over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "Cloudprober Monitor to MNE Ratio � 10:1",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of MNE On-boarded to Drift with Zero Drift Tickets",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Applications on AppDynamics (minus overrides)",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Servers that prom monitors as up",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     groupname: "Aloysius Ryan",
    //     grouptype: "CIO",
    //     grouplettergrade: "A",
    //     groupnumericgrade: 9.9,
    //     groupcolor: "GREEN",
    //     metrics: [
    //       {
    //         metric:
    //           "% of Moog Events Acknowledged in under 5 mins over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric:
    //           "% of all P1-P3 Incidents Resolved in less than 2 Hours over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "Cloudprober Monitor to MNE Ratio � 10:1",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of MNE On-boarded to Drift with Zero Drift Tickets",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Applications on AppDynamics (minus overrides)",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Servers that prom monitors as up",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     groupname: "Arvin Andrada",
    //     grouptype: "CIO",
    //     grouplettergrade: "A",
    //     groupnumericgrade: 9.9,
    //     groupcolor: "GREEN",
    //     metrics: [
    //       {
    //         metric:
    //           "% of Moog Events Acknowledged in under 5 mins over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric:
    //           "% of all P1-P3 Incidents Resolved in less than 2 Hours over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "Cloudprober Monitor to MNE Ratio � 10:1",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of MNE On-boarded to Drift with Zero Drift Tickets",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Applications on AppDynamics (minus overrides)",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Servers that prom monitors as up",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     groupname: "Jeffrey Adamski",
    //     grouptype: "CIO",
    //     grouplettergrade: "A",
    //     groupnumericgrade: 9.9,
    //     groupcolor: "GREEN",
    //     metrics: [
    //       {
    //         metric:
    //           "% of Moog Events Acknowledged in under 5 mins over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric:
    //           "% of all P1-P3 Incidents Resolved in less than 2 Hours over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "Cloudprober Monitor to MNE Ratio � 10:1",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of MNE On-boarded to Drift with Zero Drift Tickets",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Applications on AppDynamics (minus overrides)",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Servers that prom monitors as up",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     groupname: "Paul G Yelicanin",
    //     grouptype: "CIO",
    //     grouplettergrade: "A",
    //     groupnumericgrade: 9.9,
    //     groupcolor: "GREEN",
    //     metrics: [
    //       {
    //         metric:
    //           "% of Moog Events Acknowledged in under 5 mins over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric:
    //           "% of all P1-P3 Incidents Resolved in less than 2 Hours over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "Cloudprober Monitor to MNE Ratio � 10:1",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of MNE On-boarded to Drift with Zero Drift Tickets",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Applications on AppDynamics (minus overrides)",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Servers that prom monitors as up",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     groupname: "Brian M Hanley",
    //     grouptype: "CIO",
    //     grouplettergrade: "A",
    //     groupnumericgrade: 9.9,
    //     groupcolor: "GREEN",
    //     metrics: [
    //       {
    //         metric:
    //           "% of Moog Events Acknowledged in under 5 mins over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric:
    //           "% of all P1-P3 Incidents Resolved in less than 2 Hours over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "Cloudprober Monitor to MNE Ratio � 10:1",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of MNE On-boarded to Drift with Zero Drift Tickets",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Applications on AppDynamics (minus overrides)",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Servers that prom monitors as up",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     groupname: "Gurumurthy Kalyanasundaram",
    //     grouptype: "CIO",
    //     grouplettergrade: "A",
    //     groupnumericgrade: 9.9,
    //     groupcolor: "GREEN",
    //     metrics: [
    //       {
    //         metric:
    //           "% of Moog Events Acknowledged in under 5 mins over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric:
    //           "% of all P1-P3 Incidents Resolved in less than 2 Hours over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "Cloudprober Monitor to MNE Ratio � 10:1",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of MNE On-boarded to Drift with Zero Drift Tickets",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Applications on AppDynamics (minus overrides)",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Servers that prom monitors as up",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     groupname: "Richard Barron",
    //     grouptype: "CIO",
    //     grouplettergrade: "A",
    //     groupnumericgrade: 9.9,
    //     groupcolor: "GREEN",
    //     metrics: [
    //       {
    //         metric:
    //           "% of Moog Events Acknowledged in under 5 mins over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric:
    //           "% of all P1-P3 Incidents Resolved in less than 2 Hours over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "Cloudprober Monitor to MNE Ratio � 10:1",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of MNE On-boarded to Drift with Zero Drift Tickets",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Applications on AppDynamics (minus overrides)",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Servers that prom monitors as up",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     groupname: "Alan C Mohel",
    //     grouptype: "CIO",
    //     grouplettergrade: "A",
    //     groupnumericgrade: 9.9,
    //     groupcolor: "GREEN",
    //     metrics: [
    //       {
    //         metric:
    //           "% of Moog Events Acknowledged in under 5 mins over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric:
    //           "% of all P1-P3 Incidents Resolved in less than 2 Hours over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "Cloudprober Monitor to MNE Ratio � 10:1",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of MNE On-boarded to Drift with Zero Drift Tickets",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Applications on AppDynamics (minus overrides)",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Servers that prom monitors as up",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     groupname: "Marcus Brito De Oliveira",
    //     grouptype: "CIO",
    //     grouplettergrade: "A",
    //     groupnumericgrade: 9.9,
    //     groupcolor: "GREEN",
    //     metrics: [
    //       {
    //         metric:
    //           "% of Moog Events Acknowledged in under 5 mins over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric:
    //           "% of all P1-P3 Incidents Resolved in less than 2 Hours over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "Cloudprober Monitor to MNE Ratio � 10:1",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of MNE On-boarded to Drift with Zero Drift Tickets",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Applications on AppDynamics (minus overrides)",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Servers that prom monitors as up",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     groupname: "Christopher J Melfi",
    //     grouptype: "CIO",
    //     grouplettergrade: "A",
    //     groupnumericgrade: 9.9,
    //     groupcolor: "GREEN",
    //     metrics: [
    //       {
    //         metric:
    //           "% of Moog Events Acknowledged in under 5 mins over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric:
    //           "% of all P1-P3 Incidents Resolved in less than 2 Hours over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "Cloudprober Monitor to MNE Ratio � 10:1",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of MNE On-boarded to Drift with Zero Drift Tickets",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Applications on AppDynamics (minus overrides)",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Servers that prom monitors as up",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     groupname: "George S Pereira",
    //     grouptype: "CIO",
    //     grouplettergrade: "A",
    //     groupnumericgrade: 9.9,
    //     groupcolor: "GREEN",
    //     metrics: [
    //       {
    //         metric:
    //           "% of Moog Events Acknowledged in under 5 mins over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric:
    //           "% of all P1-P3 Incidents Resolved in less than 2 Hours over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "Cloudprober Monitor to MNE Ratio � 10:1",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of MNE On-boarded to Drift with Zero Drift Tickets",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Applications on AppDynamics (minus overrides)",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Servers that prom monitors as up",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     groupname: "Nyree McWilliam",
    //     grouptype: "CIO",
    //     grouplettergrade: "A",
    //     groupnumericgrade: 9.9,
    //     groupcolor: "GREEN",
    //     metrics: [
    //       {
    //         metric:
    //           "% of Moog Events Acknowledged in under 5 mins over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric:
    //           "% of all P1-P3 Incidents Resolved in less than 2 Hours over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "Cloudprober Monitor to MNE Ratio � 10:1",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of MNE On-boarded to Drift with Zero Drift Tickets",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Applications on AppDynamics (minus overrides)",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Servers that prom monitors as up",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     groupname: "Thomas L Klaas",
    //     grouptype: "CIO",
    //     grouplettergrade: "A",
    //     groupnumericgrade: 9.9,
    //     groupcolor: "GREEN",
    //     metrics: [
    //       {
    //         metric:
    //           "% of Moog Events Acknowledged in under 5 mins over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric:
    //           "% of all P1-P3 Incidents Resolved in less than 2 Hours over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "Cloudprober Monitor to MNE Ratio � 10:1",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of MNE On-boarded to Drift with Zero Drift Tickets",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Applications on AppDynamics (minus overrides)",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Servers that prom monitors as up",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     groupname: "James W Alster",
    //     grouptype: "CIO",
    //     grouplettergrade: "A",
    //     groupnumericgrade: 9.9,
    //     groupcolor: "GREEN",
    //     metrics: [
    //       {
    //         metric:
    //           "% of Moog Events Acknowledged in under 5 mins over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric:
    //           "% of all P1-P3 Incidents Resolved in less than 2 Hours over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "Cloudprober Monitor to MNE Ratio � 10:1",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of MNE On-boarded to Drift with Zero Drift Tickets",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Applications on AppDynamics (minus overrides)",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Servers that prom monitors as up",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     groupname: "Jeffrey Jones",
    //     grouptype: "CIO",
    //     grouplettergrade: "A",
    //     groupnumericgrade: 9.9,
    //     groupcolor: "GREEN",
    //     metrics: [
    //       {
    //         metric:
    //           "% of Moog Events Acknowledged in under 5 mins over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric:
    //           "% of all P1-P3 Incidents Resolved in less than 2 Hours over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "Cloudprober Monitor to MNE Ratio � 10:1",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of MNE On-boarded to Drift with Zero Drift Tickets",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Applications on AppDynamics (minus overrides)",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Servers that prom monitors as up",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     groupname: "Jeremy M Dobrick",
    //     grouptype: "CIO",
    //     grouplettergrade: "A",
    //     groupnumericgrade: 9.9,
    //     groupcolor: "GREEN",
    //     metrics: [
    //       {
    //         metric:
    //           "% of Moog Events Acknowledged in under 5 mins over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric:
    //           "% of all P1-P3 Incidents Resolved in less than 2 Hours over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "Cloudprober Monitor to MNE Ratio � 10:1",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of MNE On-boarded to Drift with Zero Drift Tickets",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Applications on AppDynamics (minus overrides)",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Servers that prom monitors as up",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     groupname: "Bhargavi Sunkara",
    //     grouptype: "CIO",
    //     grouplettergrade: "A",
    //     groupnumericgrade: 9.9,
    //     groupcolor: "GREEN",
    //     metrics: [
    //       {
    //         metric:
    //           "% of Moog Events Acknowledged in under 5 mins over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric:
    //           "% of all P1-P3 Incidents Resolved in less than 2 Hours over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "Cloudprober Monitor to MNE Ratio � 10:1",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of MNE On-boarded to Drift with Zero Drift Tickets",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Applications on AppDynamics (minus overrides)",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Servers that prom monitors as up",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     groupname: "Joe T Lee",
    //     grouptype: "CIO",
    //     grouplettergrade: "A",
    //     groupnumericgrade: 9.9,
    //     groupcolor: "GREEN",
    //     metrics: [
    //       {
    //         metric:
    //           "% of Moog Events Acknowledged in under 5 mins over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric:
    //           "% of all P1-P3 Incidents Resolved in less than 2 Hours over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "Cloudprober Monitor to MNE Ratio � 10:1",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of MNE On-boarded to Drift with Zero Drift Tickets",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Applications on AppDynamics (minus overrides)",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Servers that prom monitors as up",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     groupname: "James E Diddams",
    //     grouptype: "CIO",
    //     grouplettergrade: "A",
    //     groupnumericgrade: 9.9,
    //     groupcolor: "GREEN",
    //     metrics: [
    //       {
    //         metric:
    //           "% of Moog Events Acknowledged in under 5 mins over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric:
    //           "% of all P1-P3 Incidents Resolved in less than 2 Hours over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "Cloudprober Monitor to MNE Ratio � 10:1",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of MNE On-boarded to Drift with Zero Drift Tickets",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Applications on AppDynamics (minus overrides)",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Servers that prom monitors as up",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     groupname: "James J Spina",
    //     grouptype: "CIO",
    //     grouplettergrade: "A",
    //     groupnumericgrade: 9.9,
    //     groupcolor: "GREEN",
    //     metrics: [
    //       {
    //         metric:
    //           "% of Moog Events Acknowledged in under 5 mins over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric:
    //           "% of all P1-P3 Incidents Resolved in less than 2 Hours over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "Cloudprober Monitor to MNE Ratio � 10:1",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of MNE On-boarded to Drift with Zero Drift Tickets",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Applications on AppDynamics (minus overrides)",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Servers that prom monitors as up",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     groupname: "Jaison Banji",
    //     grouptype: "CIO",
    //     grouplettergrade: "A",
    //     groupnumericgrade: 9.9,
    //     groupcolor: "GREEN",
    //     metrics: [
    //       {
    //         metric:
    //           "% of Moog Events Acknowledged in under 5 mins over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric:
    //           "% of all P1-P3 Incidents Resolved in less than 2 Hours over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "Cloudprober Monitor to MNE Ratio � 10:1",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of MNE On-boarded to Drift with Zero Drift Tickets",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Applications on AppDynamics (minus overrides)",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Servers that prom monitors as up",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     groupname: "Sabet Elias",
    //     grouptype: "CIO",
    //     grouplettergrade: "A",
    //     groupnumericgrade: 9.9,
    //     groupcolor: "GREEN",
    //     metrics: [
    //       {
    //         metric:
    //           "% of Moog Events Acknowledged in under 5 mins over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric:
    //           "% of all P1-P3 Incidents Resolved in less than 2 Hours over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "Cloudprober Monitor to MNE Ratio � 10:1",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of MNE On-boarded to Drift with Zero Drift Tickets",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Applications on AppDynamics (minus overrides)",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Servers that prom monitors as up",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     groupname: "David W Deceder",
    //     grouptype: "CIO",
    //     grouplettergrade: "A",
    //     groupnumericgrade: 9.9,
    //     groupcolor: "GREEN",
    //     metrics: [
    //       {
    //         metric:
    //           "% of Moog Events Acknowledged in under 5 mins over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric:
    //           "% of all P1-P3 Incidents Resolved in less than 2 Hours over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "Cloudprober Monitor to MNE Ratio � 10:1",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of MNE On-boarded to Drift with Zero Drift Tickets",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Applications on AppDynamics (minus overrides)",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Servers that prom monitors as up",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     groupname: "Milton Fullwood",
    //     grouptype: "CIO",
    //     grouplettergrade: "A",
    //     groupnumericgrade: 9.9,
    //     groupcolor: "GREEN",
    //     metrics: [
    //       {
    //         metric:
    //           "% of Moog Events Acknowledged in under 5 mins over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric:
    //           "% of all P1-P3 Incidents Resolved in less than 2 Hours over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "Cloudprober Monitor to MNE Ratio � 10:1",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of MNE On-boarded to Drift with Zero Drift Tickets",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Applications on AppDynamics (minus overrides)",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Servers that prom monitors as up",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     groupname: "Sanjay Chojar",
    //     grouptype: "CIO",
    //     grouplettergrade: "A",
    //     groupnumericgrade: 9.9,
    //     groupcolor: "GREEN",
    //     metrics: [
    //       {
    //         metric:
    //           "% of Moog Events Acknowledged in under 5 mins over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric:
    //           "% of all P1-P3 Incidents Resolved in less than 2 Hours over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "Cloudprober Monitor to MNE Ratio � 10:1",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of MNE On-boarded to Drift with Zero Drift Tickets",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Applications on AppDynamics (minus overrides)",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Servers that prom monitors as up",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     groupname: "Sharon Scanlon",
    //     grouptype: "CIO",
    //     grouplettergrade: "A",
    //     groupnumericgrade: 9.9,
    //     groupcolor: "GREEN",
    //     metrics: [
    //       {
    //         metric:
    //           "% of Moog Events Acknowledged in under 5 mins over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric:
    //           "% of all P1-P3 Incidents Resolved in less than 2 Hours over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "Cloudprober Monitor to MNE Ratio � 10:1",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of MNE On-boarded to Drift with Zero Drift Tickets",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Applications on AppDynamics (minus overrides)",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Servers that prom monitors as up",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     groupname: "Mohammed Amaar Khan",
    //     grouptype: "CIO",
    //     grouplettergrade: "A",
    //     groupnumericgrade: 9.9,
    //     groupcolor: "GREEN",
    //     metrics: [
    //       {
    //         metric:
    //           "% of Moog Events Acknowledged in under 5 mins over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric:
    //           "% of all P1-P3 Incidents Resolved in less than 2 Hours over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "Cloudprober Monitor to MNE Ratio � 10:1",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of MNE On-boarded to Drift with Zero Drift Tickets",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Applications on AppDynamics (minus overrides)",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Servers that prom monitors as up",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     groupname: "Abraham Shua",
    //     grouptype: "CIO",
    //     grouplettergrade: "A",
    //     groupnumericgrade: 9.9,
    //     groupcolor: "GREEN",
    //     metrics: [
    //       {
    //         metric:
    //           "% of Moog Events Acknowledged in under 5 mins over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric:
    //           "% of all P1-P3 Incidents Resolved in less than 2 Hours over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "Cloudprober Monitor to MNE Ratio � 10:1",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of MNE On-boarded to Drift with Zero Drift Tickets",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Applications on AppDynamics (minus overrides)",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Servers that prom monitors as up",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     groupname: "Amal Chaudhuri",
    //     grouptype: "CIO",
    //     grouplettergrade: "A",
    //     groupnumericgrade: 9.9,
    //     groupcolor: "GREEN",
    //     metrics: [
    //       {
    //         metric:
    //           "% of Moog Events Acknowledged in under 5 mins over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric:
    //           "% of all P1-P3 Incidents Resolved in less than 2 Hours over Last 90 Days",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "Cloudprober Monitor to MNE Ratio � 10:1",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of MNE On-boarded to Drift with Zero Drift Tickets",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Applications on AppDynamics (minus overrides)",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       },
    //       {
    //         metric: "% of Servers that prom monitors as up",
    //         metricgrade: 9.8,
    //         metrichistory: [
    //           {
    //             metricdate: "2020-02-16",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-17",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-18",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-19",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-20",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-21",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-22",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-23",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-24",
    //             metricvalue: 9.8
    //           },
    //           {
    //             metricdate: "2020-02-25",
    //             metricvalue: 9.8
    //           }
    //         ]
    //       }
    //     ]
    //   }
    // ];
  }
}
