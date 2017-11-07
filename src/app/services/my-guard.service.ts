import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthorizationService } from './authorization.service';

@Injectable()
export class MyGuardService implements CanActivate{
    loggedIn = false;
    constructor(private authService: AuthorizationService){
      this.authService.isLogged().subscribe(
        result => {
          this.loggedIn = ( result && result.uid ) ? true : false;
        }, error => {
          this.loggedIn = false;
        });
    }
    canActivate() {
        return this.loggedIn;
    }

}
