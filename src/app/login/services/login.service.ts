import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CommonService } from '../../common/services/common.service';

@Injectable()
export class LoginService {
    private URL: string;
    constructor(private http: Http, private commonService: CommonService) {
        this.URL = 'https://reqres.in/api';
     }

    public login(username: string, password: string) {
        return this.http.post(`${this.URL}/login`, {email: username, password: password})
            .map(res => res.json())
            .catch(err => this.commonService.handleError(err));
    }
}
