import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth/auth';
import * as Firebase from 'firebase/app';
import { Router } from "@angular/router";

@Injectable()
export class AuthorizationService {
    constructor(private angularFireAuth: AngularFireAuth, private router: Router) {
        this.isLogged();
    }
    public facebookLogin(){
      this.angularFireAuth.auth.signInWithPopup(new Firebase.auth.FacebookAuthProvider())
        .then(result => {
          alert('Facebook user logged');
          this.router.navigate((['places']));
        }).catch(error => {
          console.log(error);
        })
    }
    public login = (email, password) => {
        this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
        .then(response => {
            alert('User logged!');
            this.router.navigate((['places']));
        }).catch(error => {
            alert('An error ocurred!');
            console.log(error);
        });
    }
    public signIn = (email, password) => {
        this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(response => {
                alert('User register!');
                this.router.navigate((['places']));
            }).catch(error => {
                alert('An error ocurred!');
                console.log(error);
            });
    }
    public isLogged(){
        return this.angularFireAuth.authState;
    }
    public getUser(){
        return this.angularFireAuth.auth;
    }
    public logout(){
        this.angularFireAuth.auth.signOut();
        alert('You were logged out');
        this.router.navigate((['places']));
    }
}
