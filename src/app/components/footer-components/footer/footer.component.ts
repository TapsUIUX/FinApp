import { Component, OnInit ,Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit,OnChanges {

  @Input() data:object;

  constructor() { }

  ngOnInit() {
    
    let elem = document.querySelector('.footer') as HTMLElement;
    elem.style.display = "block";
  
  }
  
  ngOnChanges(){
    if(this.data){
      this.data = {...this.data}
      //console.log("in footer component : ", this.data)
    }
    
  }
}
