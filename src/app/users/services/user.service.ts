import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CommonService } from '../../common/services/common.service';
import { User } from '../../common/models/user';
import { useAnimation } from '@angular/core/src/animation/dsl';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UserService {
    private URL: string;
    // observable source
    private userCreatedSource = new Subject<User>();
    private userDeletedSource = new Subject<User>();

    // observable stream
    userCreated$ = this.userCreatedSource.asObservable();
    userDeleted$ = this.userDeletedSource.asObservable();

    constructor(private http: Http, private commonService: CommonService) {
        this.URL = 'https://reqres.in/api';
    }
    /**
     * Convert User info to the API to our standart/format
     */
    private toUser(user): User {
        return {
            id: user.id,
            name: `${user.first_name} ${user.last_name}`,
            username: user.first_name,
            avatar: user.avatar
        };
    }
    public getUsers(): Observable<User[]> {
        return this.http.get(`${this.URL}/users`)
            .map(res => res.json().data)
            .map(users => users.map(this.toUser))
            .catch(this.commonService.handleError);
    }

    public getUser(id: number): Observable<User> {
        return this.http.get(`${this.URL}/users/${id}`)
            .map(res => res.json().data)
            .map(this.toUser)
            .catch(this.commonService.handleError);
    }

    public createUser(user: User): Observable<User> {
        return this.http.post(`${this.URL}/users`, user)
            .map(res => res.json())
            .do(user => this.userCreated(user))
            .catch(this.commonService.handleError);
    }

    public updateUser(user: User): Observable<User> {
        return this.http.put(`${this.URL}/users/${user.id}`, user)
        // return this.http.get(`${this.URL}/users/23`)
            .map(res => res.json())
            .catch(this.commonService.handleError);
    }

    public deleteUser(id: number): Observable<any> {
        return this.http.delete(`${this.URL}/users/${id}`)
            .do(res => this.userDeleted())
            .catch(this.commonService.handleError);
    }

    public userCreated(user: User) {
        this.userCreatedSource.next(user);
    }

    public userDeleted() {
        this.userDeletedSource.next();
    }
}
