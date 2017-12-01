import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http } from '@angular/http';
import { CommonService } from './common.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
    private URL: string;
    private isLogged: boolean;

    private loginSuccessSource = new Subject<boolean>();
    loginSuccess$ = this.loginSuccessSource.asObservable();

    constructor(private http: Http, private commonService: CommonService) {
        this.URL = 'https://reqres.in/api';
        this.isLogged = !!localStorage.getItem('auth_token');
    }

    public isLoggedIn(): boolean {
        return this.isLogged;
    }

    public login(username: string, password: string): Observable<any> {
        return this.http.post(`${this.URL}/login`, {email: username, password: password})
            .map(res => res.json())
            .do(res => {
                localStorage.setItem('auth_token', res.token);
                this.loginSuccessSource.next(true);
            })
            .catch(err => this.commonService.handleError(err));
    }

    public logout(): void {
        this.loginSuccessSource.next(false);
        localStorage.removeItem('auth_token');
    }
}
