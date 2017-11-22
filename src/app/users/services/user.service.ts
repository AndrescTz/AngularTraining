import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CommonService } from '../../common/services/common.service';
import { User } from '../../common/models/user';

@Injectable()
export class UserService {
    private URL: string;
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
}
