import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartDataset, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styleUrls: ['./grafica-barra.component.css']
})
export class GraficaBarraComponent implements OnInit {

  @Input() horizontal: boolean = false;
  @Input() barChartInfo!: ChartData<'bar'>;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  public barChartType: ChartType = 'bar';
  public barChartData!: ChartData<'bar'>;
  // public barChartData: ChartData<'bar'> = {
  //   labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
  //   datasets: [
  //     { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: '#8C72EB', hoverBackgroundColor: '#8C72EB' },
  //     { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
  //     { data: [65, 59, 80, 81, 56, 55, 40], label: 'Mi nombre' },
  //   ],
  // };

  constructor() {
    console.log(this.barChartInfo)
  }

  /*Se hace la validacion en ngInit ppr que en ese momento del ciclo de vida
  del la variable horizontal que recibe como parametro se obtiene el valor real*/
  ngOnInit(): void {
    if (this.horizontal) {
      this.barChartType = 'line'
    }
    this.barChartData = this.barChartInfo;
  }
}
