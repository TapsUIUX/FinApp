import { Component, OnInit,OnChanges } from '@angular/core';
import {ScreenDataService} from './services/screen-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) 
export class AppComponent implements OnInit {

  highlight:any;


  ngOnInit(){
    this.data = this._getData.companyData;
    this.companyNotInList =  this._getData.companyNotInList
    this.dataContent = this.data.filter(el=>el['selected'])
  }

  constructor(private _getData : ScreenDataService) { }

  title = 'FinanceApp';
  clickedTitle="";
  toggleModal:boolean =  false;
  showFooter:boolean = false;
  elem : HTMLElement;
  footerContainer : HTMLElement;
  footerData:object;
  data:Array<object>;
  companyNotInList:Array<object>;
  dataContent:Array<object>;
  maintexts:any;

  onColumnSelect=(event)=>{
    this.highlight = document.querySelectorAll('.column-wraper');
    this.footerData = {...event}
    this.elem = document.querySelector('#footer') as HTMLElement; 
    this.footerContainer =document.querySelector('.footer-container') as HTMLElement;
    
    //console.log("app comp event On select: this.footer data : ",this.footerData)
    this.checkOpacity();
    this.showFooter= true;
  }

  checkOpacity(){
    this.footerContainer.style.height ="313px"
    this.elem.style.opacity = "1";
  }

  toogleFooter(){
    //console.log(this.highlight)
    this.footerContainer.style.height ="80px"
    this.elem.style.opacity = "0";
    this.showFooter= false;
    this.highlight.forEach(el=>{
      el.classList.remove('active');
    })
  }

  titleClicked(event){
    //console.log("in appcomp title clicked : ", event);
    this.clickedTitle = event.toLowerCase();
    this.toggleModal=true;

  }

  toggleModalView(){
    this.toggleModal = false;
    //remove selected items
    this.maintexts = document.querySelectorAll('.compare-keys') 
    this.maintexts.forEach(el => {
      el.classList.remove('clicked')
    });
   
  }

  itemSelected(event){
    
    //this.data[index]['selected'] = !this.data[index]['selected'] 
     this.data =  [event,...this.data];
    
  
  }

  // Screen style on open // Dropped.
  // openScreen(){
  //   let app = document.querySelector('#appContent') as HTMLElement;
  //   let mask = document.querySelector('.open-mask') as HTMLElement;
  //   let top = document.querySelector('.mask-top') as HTMLElement;
  //   let btm = document.querySelector('.mask-bottom') as HTMLElement;
  //   top.style.height='0px';
  //   btm.style.height='0px';
  //   btm.style.marginTop='100vh'
    
  //   mask.style.zIndex="-100"
  //   app.click();

  // }

  
 


}
