import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import {HighlightDirective} from "./directives/highlight.directive";

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBTTcm3P2sIYZUC0A2I6sSFZrqhcDSLWWc'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
