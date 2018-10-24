import { Component, OnInit,Input, ViewChild, OnChanges  } from '@angular/core';
 
  

@Component({
  selector: 'app-key-non-gap-metrics',
  templateUrl: './key-non-gap-metrics.component.html',
  styleUrls: ['./key-non-gap-metrics.component.css']
})
export class KeyNonGapMetricsComponent implements OnInit ,OnChanges {

  @Input() keyNonGaap : object;
  
  temp1:any;
  temp2:any;
  temp3:any;
  temp4:any;
  chart:any;
  chartData:object;
  ChartOption:object;

  constructor() { }

  ngOnInit() {
 
    if(this.keyNonGaap){
    this.temp1 = this.keyNonGaap['subscription'].value;
    this.temp1 = this.temp1.slice(0,this.temp1.length-1);
    this.temp2 = this.keyNonGaap['costOfRevenue'].value;
    this.temp2 = this.temp2.slice(0,this.temp2.length-1)
    this.temp3 = this.keyNonGaap['costOfRevenue'].value;
    this.temp3 = this.temp3.slice(0,this.temp3.length-1)
    //this.temp4 = this.keyNonGaap['other'].value;
    //this.temp4 = this.temp4.slice(0,this.temp4.length-1)
    ////console.log("non gaap data", this.temp1,this.temp2,this.temp3)
    }
    
    
  
    this.chartData = {
      datasets: [
        {
            data: [ this.temp1, this.temp2, this.temp3],
            backgroundColor: [
                "#05eee8",
                "#08aac8",
                "#018bd5" 
            ] ,
            borderWidth: 0
        }]
  
     
     };
  
     this.ChartOption ={
      cutoutPercentage: 70,
      tooltips: {
        enabled: false
        },
        aspectRatio: 2
     }
  
  
  






   
}

 

ngOnChanges(){
  
  if(this.keyNonGaap){
    this.temp1 = this.keyNonGaap['subscription'].value;
    this.temp1 = this.temp1.slice(0,this.temp1.length-1);
    this.temp2 = this.keyNonGaap['costOfRevenue'].value;
    this.temp2 = this.temp2.slice(0,this.temp2.length-1)
    this.temp3 = this.keyNonGaap['costOfRevenue'].value;
    this.temp3 = this.temp3.slice(0,this.temp3.length-1)
    //console.log("non gaap data", this.temp1,this.temp2,this.temp3,this.temp4)
    }

    this.chartData = {
      datasets: [
        {
            data: [ this.temp1, this.temp2, this.temp3 ],
            backgroundColor: [
                "#05eee8",
                "#08aac8",
                "#018bd5" 
            ] ,
            borderWidth: 0
        }]
  
     
     };
    
}

}