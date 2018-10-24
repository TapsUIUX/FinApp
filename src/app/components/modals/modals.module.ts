import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { AdvertisingComponent } from './advertising/advertising.component';
import { SharedModule } from '../shared/shared.module'
 
 
@NgModule({
  declarations: [ 
  AdvertisingComponent],
  imports: [CommonModule,SharedModule],
  providers: [],
  bootstrap: [],
  exports:[ AdvertisingComponent ]
})
export class ModalsModule { }
