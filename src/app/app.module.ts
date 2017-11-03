import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { Routes, RouterModule } from '@angular/router';
import { PlacesComponent } from './components/places/places.component';
import { CreateComponent } from './components/create/create.component';
import { DetailComponent } from './components/detail/detail.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ErrorMessageComponent } from './shared/components/error-message/error-message.component';
import { LinkifystrPipe } from './pipes/linkifystr.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { CountCLicksDirective } from './directives/count-clicks.directive';
import { MessageTypeBoxDirective } from './directives/message-type-box.directive';
import { PlacesService } from './services/places.service';
import { AuthorizationService } from './services/authorization.service';
import { MyGuardService } from './services/my-guard.service';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

const appRoutes: Routes = [
  { path: '', component: PlacesComponent },
  { path: 'places', component: PlacesComponent },
  { path: 'create', component: CreateComponent, canActivate: [MyGuardService] },
  { path: 'edit/:id', component: CreateComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: 'places'}
];
@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    CountCLicksDirective,
    LoginComponent,
    RegisterComponent,
    PlacesComponent,
    CreateComponent,
    DetailComponent,
    ContactComponent,
    ErrorMessageComponent,
    MessageTypeBoxDirective,
    LinkifystrPipe
],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBTTcm3P2sIYZUC0A2I6sSFZrqhcDSLWWc'
    }),
    RouterModule.forRoot(appRoutes),
    HttpModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase, 'platzisqueare'),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [PlacesService, AuthorizationService, MyGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
