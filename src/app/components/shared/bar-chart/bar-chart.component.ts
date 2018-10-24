import { Component, OnInit ,ViewChild ,Input , OnChanges} from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit ,OnChanges{

  @ViewChild('BarChart') private chartRef ;
 
  @Input() dataInput :object;
  @Input() optionInput:object;

  data:object;
  option:object;
  chart:any;

  constructor() { }

  ngOnInit() {
  }


  ngOnChanges(){

    this.data = this.dataInput || {}
    this.option = this.optionInput || {}
  
    //console.log("in bar chart : ", this.dataInput['datasets'][0].data);

    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'bar',
      data: this.data,
      options: this.option

  })

  }


 

}
