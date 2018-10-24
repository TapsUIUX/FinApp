import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {ScreenDataService} from '../../../services/screen-data.service';
import { TargetLocator } from 'selenium-webdriver';

@Component({
  selector: 'app-content-left',
  templateUrl: './content-left.component.html',
  styleUrls: ['./content-left.component.css']
})
export class ContentLeftComponent implements OnInit {

  @Output()  titleClick_e = new EventEmitter();

  constructor(private _getData:ScreenDataService) { }

  keyNonGaap : Array<object>;
  kpis:Array<object>;
  keyNonGaapMetricsTitle:string;
  KPITitle:string;

  maintexts:any;
  subtexts:any;
 

  ngOnInit() {
    this.keyNonGaapMetricsTitle= "KEY NON-GAAP METRICS"
    this.KPITitle="KPI'S";
   
    this.keyNonGaap = this._getData.keyNonGaapMetricsName;
    this.kpis= this._getData.KPINames;
    //get class list once 
 
  }

  onTitleClick(title,target){
    this.maintexts = document.querySelectorAll('.compare-keys') 
    //console.log("title Clicked : ", title,target)
    this.maintexts.forEach(el => {
      el.classList.remove('clicked');
    });
   
    target.classList.add('clicked');
    
    //trigger the modal with event
    this.titleClick_e.emit(title)
  }

}
