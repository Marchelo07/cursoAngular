import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.css']
})
export class DonaHttpComponent implements OnInit {

  constructor(
    private graficasService: GraficasService
  ) { }

  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartData!: ChartData<'doughnut'>;


  ngOnInit(): void {
    // this.graficasService.getUsuariosRedesSociales().subscribe(data => {
    //   const labels = Object.keys(data);
    //   const values = Object.values(data);
    //   this.setInformationData(labels, values);
    // });

    //Restructurando el codigo, para que sea mas limpio
    this.graficasService.getUsuariosRedesSocialesData().subscribe(
      ({ labels, values }) => {
        this.setInformationData(labels, values);
      })
  }

  setInformationData(labels: string[], values: number[]) {
    const dataInfo: ChartData<'doughnut'> = {
      labels: labels,
      datasets: [
        {
          data: values, backgroundColor: [
            '#047ED4',
            '#11C9EB',
            '#05F694',
          ]
        },
      ],
    };
    this.doughnutChartData = dataInfo;
  }

}
