import { NgModule, ModuleWithProviders } from '@angular/core';
import {CommonModule} from '@angular/common';
 
import {ObjToArrayPipe}from '../pipes/obj-to-array.pipe';
 
 
 
 

@NgModule({
  declarations: [

    ObjToArrayPipe 
   
  ],
  imports: [
    
    CommonModule,
     
  ],
  providers: [],
  bootstrap: [],
  exports:[ 
    ObjToArrayPipe]
})
export class PipesModule { 

 
}
