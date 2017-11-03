import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth/auth';

@Injectable()
export class AuthorizationService {
    constructor(private angularFireAuth: AngularFireAuth) { 
        this.isLogged();
    }
    public login = (email, password) => {
        this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
        .then(response => {
            alert('User logged!');
            console.log(response);
        }).catch(error => {
            alert('An error ocurred!');
            console.log(error);
        });
    }
    public signIn = (email, password) => {
        this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(response => {
                alert('User register!');
                console.log(response);
            }).catch(error => {
                alert('An error ocurred!');
                console.log(error);
            });
    }
    public isLogged(){
        return this.angularFireAuth.authState;
    }
}