import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
 
 
import {FooterComponent} from './footer/footer.component'
import {SummaryComponent} from './summary/summary.component';
import {KeyMetricsComponent} from './key-metrics/key-metrics.component';
import {KeyNonGapMetricsComponent} from './key-non-gap-metrics/key-non-gap-metrics.component';
import { KeyPerformanceIndicatorsComponent } from './key-performance-indicators/key-performance-indicators.component';



import {PipesModule} from '../../pipes/pipes.module'
import {SharedModule} from '../shared/shared.module'
 

 
 
 
@NgModule({
  declarations: [
    FooterComponent, 
    SummaryComponent,
    KeyNonGapMetricsComponent,
    KeyPerformanceIndicatorsComponent,
    KeyMetricsComponent
  ],
  imports: [
    
    CommonModule,
    PipesModule,
    SharedModule
     
  ],
  providers: [],
  bootstrap: [],
  exports:[ 
    FooterComponent,
    SummaryComponent,
    KeyNonGapMetricsComponent,
    KeyPerformanceIndicatorsComponent,
    KeyMetricsComponent
     ]
})
export class FooterComponentsModule { }
