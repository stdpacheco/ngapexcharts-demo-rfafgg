import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';

import { AppComponent } from './app.component';
import { SeriesPipe } from './series.pipe';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule, 
    NgApexchartsModule 
  ],
  declarations: [ AppComponent, SeriesPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {

}
