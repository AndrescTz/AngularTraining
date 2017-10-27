import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { Routes, RouterModule } from '@angular/router';
import { PlacesComponent } from './places/places.component';
import { DetailComponent } from './detail/detail.component';
import { ContactComponent } from './contact/contact.component';

import { AppComponent } from './app.component';
import {HighlightDirective} from "./directives/highlight.directive";
import {CountCLicksDirective} from "./directives/count-clicks.directive";
import { PlacesService } from "./services/places.service";

const appRoutes: Routes = [
  { path: '', component: PlacesComponent },
  { path: 'places', component: PlacesComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: 'places'}
];
@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    CountCLicksDirective,
    PlacesComponent,
    DetailComponent,
    ContactComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBTTcm3P2sIYZUC0A2I6sSFZrqhcDSLWWc'
    }),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [PlacesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
