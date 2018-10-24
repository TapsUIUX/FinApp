import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

 
 


// Modules
import {CommonComponentsModule} from '../app/components/common-components/commonComponents.module';
import {ComparePageModule} from '../app/components/compare-page-components/comparePage.module';
import {FooterComponentsModule} from '../app/components/footer-components/footerComponets.module';
import {ModalsModule} from '../app/components/modals/modals.module';
 


import { AppComponent } from './app.component';
 
 
 

 

@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    CommonComponentsModule,
    ComparePageModule,
    FooterComponentsModule,
    ModalsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule {


 }
