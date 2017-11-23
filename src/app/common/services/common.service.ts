import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CommonService {
    constructor() {}

    public handleError(err): Observable<any> {
        let errMessage: string;
        if (err instanceof Response) {
            const body = err.json() || '';
            const error = body.error || JSON.stringify(body);
            errMessage = `${err.status} - ${err.statusText || ''} ${error}`;
        }else {
            errMessage = err.message ? err.message : err.toString();
        }
        return Observable.throw(errMessage);
    }
}
