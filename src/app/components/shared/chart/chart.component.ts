import { Component, OnInit ,ViewChild ,Input , OnChanges} from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit ,OnChanges{

  @ViewChild('DoughnutChart') private chartRef ;
 
  @Input() dataInput :object;
  @Input() optionInput:object;

  data:object;
  option:object;
  chart:any;

  constructor() { }

  ngOnInit() {
  }


  ngOnChanges(){

    this.data = this.dataInput || {};
    this.option = this.optionInput || {
      cutoutPercentage: 70,
      tooltips: {
        enabled: false
        },
        aspectRatio: 1
     }
  
    //console.log("in chart : ", this.dataInput['datasets'][0].data);

    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'doughnut',
      data: this.data,
      options: this.option

  })

  }


 

}
