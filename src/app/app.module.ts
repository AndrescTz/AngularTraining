import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { Routes, RouterModule } from '@angular/router';
import { PlacesComponent } from './places/places.component';
import { DetailComponent } from './detail/detail.component';

import { AppComponent } from './app.component';
import {HighlightDirective} from "./directives/highlight.directive";
import {CountCLicksDirective} from "./directives/count-clicks.directive";

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'places', component: PlacesComponent },
  { path: 'detail', component: DetailComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    CountCLicksDirective,
    PlacesComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBTTcm3P2sIYZUC0A2I6sSFZrqhcDSLWWc'
    }),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
