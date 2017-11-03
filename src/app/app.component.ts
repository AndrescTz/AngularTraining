import { Component } from '@angular/core';
import { AuthorizationService } from './services/authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedIn = false
  constructor(private authService: AuthorizationService){
    this.authService.isLogged().subscribe(
      result => {
        this.loggedIn = ( result && result.uid ) ? true : false;
      }, error => {
        this.loggedIn = false;
      }
    );
  }
}
