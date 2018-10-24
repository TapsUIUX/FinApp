import { Component, OnInit, Input ,ViewChild} from '@angular/core';
 

@Component({
  selector: 'app-key-performance-indicators',
  templateUrl: './key-performance-indicators.component.html',
  styleUrls: ['./key-performance-indicators.component.css']
})
export class KeyPerformanceIndicatorsComponent implements OnInit {

  @Input() kpis:object;
  @Input() summary:object;

  expansion:any;
  expChartData:object;
  expChartOption:object;
  renewal:any;
  renChartData:object;
  renChartOption:object;
  cohort:any;
  cohChartData:object;
  cohChartOption:object;
  tempExp:any;
  tempRen:any;
  tempCoh:any;
 
  
  
  constructor() { }



  ngOnInit() {

   

  }

  ngOnChanges(){


    // this.tempExp = this.summary['expansionRate'].value;
    // this.tempExp = this.tempExp.slice(0,this.tempExp.length-1);
    // this.tempRen = this.kpis['renewalRate'].value;
    // this.tempRen = this.tempRen.slice(0,this.tempRen.length-1);
    // this.tempCoh = this.summary['cohortAnalysis'].value;
    // this.tempCoh = this.tempCoh.slice(0,this.tempCoh.length-1);



    // this.expChartData = {
    //     datasets: [
    //       {
    //           data: [this.tempExp, 100-this.tempExp ],
    //           backgroundColor: [
    //               "#00ffcc",
    //               "#1e5353"  
    //           ] ,
    //           borderWidth: 0
    //       }]
    
    //    };
  
  
    //    this.renChartData = {
    //     datasets: [
    //       {
    //           data: [this.tempRen, 100-this.tempRen],
    //           backgroundColor: [
    //               "#05eee8",
    //               "#1f4f59"  
    //           ] ,
    //           borderWidth: 0
    //       }]
    
    //    };
  
  
    //    this.cohChartData = {
    //     datasets: [
    //       {
    //           data: [this.tempCoh, 100-this.tempCoh ],
    //           backgroundColor: [
    //               "#ff007e",
    //               "#531e43"  
    //           ] ,
    //           borderWidth: 0
    //       }]
    
    //    };
  
  
    //    this.expChartOption = this.renChartOption =this.cohChartOption = {
    //     cutoutPercentage: 80,
    //     tooltips: {
    //       enabled: false
    //       },
    //       aspectRatio: 1
    //    }
  
  
    


  }

}
