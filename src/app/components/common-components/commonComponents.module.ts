import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
 
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [ 
    HeaderComponent,
   
  ],
  imports: [
    CommonModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [],
  exports:[HeaderComponent]
})
export class CommonComponentsModule { }
