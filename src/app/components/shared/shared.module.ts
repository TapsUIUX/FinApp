import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { ChartComponent } from './chart/chart.component';
import { BarComponent } from './bar/bar.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
 
 
@NgModule({
  declarations: [ 
    ChartComponent,BarComponent, BarChartComponent],
  imports: [CommonModule],
  providers: [],
  bootstrap: [],
  exports:[  ChartComponent,BarComponent,BarChartComponent ]
})
export class SharedModule { }
