import { Component, OnInit ,Input, AfterViewChecked, Output,EventEmitter,OnChanges, SimpleChanges} from '@angular/core';

 
 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  @Input() data:Array<any>
  @Output() header_e = new EventEmitter() ;

  toggle = 0;
  elem:HTMLElement;
  inputData:string;
  displayData:Array<any> = [];

  constructor() {
    
  }

  ngOnInit() {
    ////console.log("data : ",this.data)
    this.elem = document.querySelector('.dropdown-2') as HTMLElement;
 
  }

  onChangeModel(){

   this.checkData();
   
  }

  checkData(){

    if(this.inputData!=''){

      this.displayData = this.data.filter(el=>  
        { 
          
          return el.name.toLowerCase().indexOf(this.inputData.toLowerCase()) != -1 ;
           
          }
         )
      ////console.log("this.inputData",this.inputData,this.displayData)
      
    }else{
      this.displayData = [];
    }
  }
   
 

  toogleDropdown =  () =>{
  //  //console.log(this.elem,this.toogle)
    if(this.toggle == 0){
      this.elem.style.height = '605px';
      this.toggle = 1;
    }else{
      this.elem.style.height = '0px';
      this.toggle=0;
    }

} 

itemClicked =  (item) =>{
 ////console.log(" item cliked : ", index);
 this.header_e.emit(item);
 this.data =  this.data.filter(el=> el.name !== item.name);
 this.checkData()

}

reload(){
  window.location.reload();
}

}
