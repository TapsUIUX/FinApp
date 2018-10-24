import { Component, OnInit ,Output,EventEmitter, Input,OnChanges} from '@angular/core';



@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit,OnChanges  {

  @Input() companyData:Array<any>;
  @Output() summary_e =  new EventEmitter();
  @Output() titleClick_e =  new EventEmitter();

  
  lines:Array<number>;
  length:number;
  toogleView:boolean;
  
  summaryData:object;
  constructor( ) { }

  ngOnInit() {
   this.lines = Array(18).fill(1);
   this.length= this.companyData.length;
   this.toogleView = false;
  }

  setSummary = (event) => {
    //console.log("event emited : ",event)
    this.summaryData = {...this.companyData[event]};
    this.summary_e.emit(this.summaryData) ;  
  }

  titleClicked(title){
    this.titleClick_e.emit(title);
  }
 

  ngOnChanges(){
     
    if(this.length != this.companyData.length){
      this.length = this.companyData.length;
      this.toogleView = !this.toogleView;
    }
    
    
  }

}
