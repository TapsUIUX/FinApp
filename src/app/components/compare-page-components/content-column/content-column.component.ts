import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-content-column',
  templateUrl: './content-column.component.html',
  styleUrls: ['./content-column.component.css']
})
export class ContentColumnComponent implements OnInit {

  @Input()data:Object;
 
  
  constructor() { }

  ngOnInit() {    
  }

  getClassName =(s1,press,last)=>{
    // will retrun class to apply cell style depending on s1 and press media etc..
    if(s1&&press){   
      return last? "column-faded-blue border-bottom" : "column-faded-blue";
    }else{
      return last? "column-faded-white border-bottom" : "column-faded-white";
    }
  }



  

}
