import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
 
 
import { ContentComponent } from './content/content.component';
import { ContentLeftComponent } from './content-left/content-left.component';
import { ContentRightComponent } from './content-right/content-right.component';
import { ContentColumnComponent } from './content-column/content-column.component';

import {ServicesModule} from '../../services/services.module';


import {PipesModule} from '../../pipes/pipes.module'

 
 
 
 
 

@NgModule({
  declarations: [
   
    ContentComponent,
    ContentLeftComponent,
    ContentRightComponent,
    ContentColumnComponent,
    
     
    
    
   
  ],
  imports: [
    
    CommonModule,
    PipesModule,
    ServicesModule.forRoot()
    
     
  ],
  providers: [],
  bootstrap: [],
  exports:[ ContentComponent,
    ContentLeftComponent,
    ContentRightComponent,
    ContentColumnComponent]
})
export class ComparePageModule { }
