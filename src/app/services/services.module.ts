import { NgModule ,ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScreenDataService} from './screen-data.service'

 


@NgModule({
  declarations: [
  ],
  imports: [  
    CommonModule    
  ],
  providers: [],
  bootstrap: [],
  exports:[ ]
})
export class ServicesModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServicesModule,
      providers: [ScreenDataService]
    };
  }
    
    
 }
