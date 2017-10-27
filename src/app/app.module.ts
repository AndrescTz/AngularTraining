import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { Routes, RouterModule } from '@angular/router';
import { PlacesComponent } from './components/places/places.component';
import { CreateComponent } from './components/create/create.component';
import { DetailComponent } from './components/detail/detail.component';
import { ContactComponent } from './components/contact/contact.component';

import { AppComponent } from './app.component';
import {HighlightDirective} from './directives/highlight.directive';
import {CountCLicksDirective} from './directives/count-clicks.directive';
import { PlacesService } from './services/places.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

const appRoutes: Routes = [
  { path: '', component: PlacesComponent },
  { path: 'places', component: PlacesComponent },
  { path: 'create', component: CreateComponent },
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
    CreateComponent,
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
    AngularFireModule.initializeApp(environment.firebase, 'platzisqueare'),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [PlacesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
