import { Component, OnInit ,Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit,OnChanges {

  @Input() summary:object;

  constructor() { }

  ngOnInit() {
    
  }

  ngOnChanges(){
    //console.log("in summary : ",this.summary)
  }

}
