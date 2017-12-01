import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class GuardService implements CanActivate {

    constructor(private authService: AuthService) {}

    public canActivate() {
        return this.authService.isLoggedIn();
    }
}
