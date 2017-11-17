import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';

@Injectable()
export class UsersService {
    private URL: string;
    constructor(private http: Http) {
        this.URL = 'https://reqres.in/api';
    }

    public getUsers(): Observable<User[]> {
        return this.http.get(`${this.URL}/users`)
            .map(res => res.json().data)
            .catch(this.handleError);
    }

    public getUser() {
        return this.http.get('http://example.com')
            .map(res => res.json())
            .catch(this.handleError);
    }

    private handleError(err): Observable<any> {
        let errMessage: string;
        if (err instanceof Response) {
            const body = err.json() || '';
            const error = body.error || JSON.stringify(body);
            errMessage = `${err.status} - ${err.statusText} || ''} ${error}`;
        }else {
            errMessage = err.message ? err.message : err.toString();
        }
        return Observable.throw(errMessage);
    }
}
