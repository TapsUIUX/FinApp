
import {Component, OnInit,ElementRef, Input ,Output,EventEmitter ,AfterViewInit, OnChanges} from '@angular/core';
 


declare var Swiper: any;
 
@Component({
  selector: 'app-content-right',
  templateUrl: './content-right.component.html',
  styleUrls: ['./content-right.component.css']
})
export class ContentRightComponent implements OnInit , AfterViewInit, OnChanges{
  @Input() companyData:Array<any>;
  @Output() index_e =  new EventEmitter();

  Swiper: any;
  mySwiper:any;
  elem:any;

  length:number;
  cheatView:boolean;
 

  constructor(private elementRef: ElementRef ) {}

  
ngOnInit() {

 this.length = this.companyData.length;
 this.cheatView=false;
  ////console.log("company data", this.companyData)
}

ngOnChanges(){

}



setActive = (index)=>{

  this.elem.forEach(el=>{
    el.classList.remove('active');
  })
  this.elem[index].classList.add('active');
};

onColumnSelect=(index)=>{ 
  this.setActive(index);
  //console.log("clicked index : ",index);
  this.index_e.emit(index) 
}

 
ngAfterViewInit() {



  this.elem = document.querySelectorAll('.column-wraper');


  this.mySwiper = new Swiper('.swiper-container', {
    //Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 6.5,
    spaceBetween: 30
  })

  
}


}