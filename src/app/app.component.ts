import { Component } from '@angular/core';
import { AuthorizationService } from './services/authorization.service';
import {AngularFireAuth} from "angularfire2/auth";
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedIn = false;
  loggedUser: string;
  constructor(private authService: AuthorizationService, private angularFireAuth: AngularFireAuth){
    this.loggedUser = '';
    this.authService.isLogged().subscribe(
      result => {
        this.loggedIn = ( result && result.uid ) ? true : false;
        setTimeout( () => {
          if(this.loggedIn){
            this.loggedUser = this.authService.getUser().currentUser.displayName;
          }
        }, 500);
      }, error => {
        this.loggedIn = false;
      }
    );
  }
  getLoggedIn(){
    return this.loggedIn;
  }
  logout(){
    this.authService.logout();
  }
}
