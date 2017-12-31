import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppService } from './app.service';
import { SuggestionComponent } from './suggestion/suggestion.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent,  SuggestionComponent ],
  providers:    [ AppService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
