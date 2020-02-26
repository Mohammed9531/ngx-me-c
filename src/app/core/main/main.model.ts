
export class LineChart {
    metricdate: string;
    metricvalue: number;
}

export class MetricsData {
    metric: string;
    metricgrade:  number;
    metrichistory: LineChart[];
}

export class MonitoringData {
    groupName: string;
    groupType: string;
    groupLetterGrade: string;
    groupNumericGrade: number;
    groupColor: string;
    metrics: MetricsData[];
}

export class RefreshTime {
    static interval =  5 * 60 * 1000;
}
