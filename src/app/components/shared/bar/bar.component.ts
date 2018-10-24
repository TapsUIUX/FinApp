import { Component, OnInit ,  Input, OnChanges} from '@angular/core';
 

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit ,OnChanges {

@Input() percentile : any;
@Input() index:number;
@Input() color:string;

percent:any;

  constructor() { }

  ngOnInit() {

  
 
  }

  ngAfterViewInit(){
    
  }

  ngOnChanges(){
    let elem = document.querySelectorAll(".myBar") ;
    if(elem){
      elem[this.index]['style'].backgroundColor = this.color; 
      elem[this.index]['style'].width = this.percentile  ;
    }
  }

}
