import { Component } from '@angular/core';
import { ChartData, ChartType, ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent {

  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [350, 450, 100], backgroundColor:[
        '#047ED4',
        '#11C9EB',
        '#05F694',
      ]},
      // { data: [50, 150, 120] },
      // { data: [250, 130, 70] },
    ],
  };
}
