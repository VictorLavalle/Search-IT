import { Statistics } from './../../../interfaces/statistics';
import { ReportsService } from './../../../services/reports/reports.service';
import { StatisticsService } from './../../../services/statistics/statistics.service';
import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {


  public statistics !: Statistics;

  constructor(private statisticsService :StatisticsService, private reportsService : ReportsService) { }

  ngOnInit(): void {
    this.getStatistics();

  }

  public getStatistics():void {
    this.statisticsService.getStatistics().subscribe(
      (data) => {
        console.log(data);
        this.statistics = data;
        this.renderChartT();
      }
    );
  }

  downloadCsvReport($event: any) {
    if ($event.target.title !== null) {
      let fileName = $event.target.title;
      this.reportsService.getCsvReport().subscribe((response) => {
        console.log(response);
        let filename = fileName;
        let blob: Blob = response;
        let a = document.createElement('a');
        a.download = filename;
        a.href = window.URL.createObjectURL(blob);
        console.log(a);
        a.click();
      });
    }
  }


  donwloadPdfReport($event: any) {
    if ($event.target.title !== null) {
      let fileName = $event.target.title;
      this.reportsService.getPdfReport().subscribe((response) => {
        console.log(response);
        let filename = fileName;
        let blob: Blob = response;
        let a = document.createElement('a');
        a.download = filename;
        a.href = window.URL.createObjectURL(blob);
        console.log(a);
        a.click();
      });
    }
  }

  renderChartT(){
    var myChart = new Chart("myChart", {
      type: 'bar',
      data: {
          labels: ['PDF'],
          datasets: [{
              label: 'Cantidad de documentos',
              data: [this.statistics.docs_pdf],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  }
}
