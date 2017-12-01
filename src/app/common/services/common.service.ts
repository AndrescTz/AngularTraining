import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CommonService {
    private errorMessageSource = new Subject<string>();
    errorMessage$ = this.errorMessageSource.asObservable();

    constructor() {}

    public handleError(err): Observable<any> {
        let errMessage: string;
        let simpleError: string;
        if (err instanceof Response) {
            const body = err.json() || '';
            const error = body.error || JSON.stringify(body);
            simpleError = error;
            errMessage = `${err.status} - ${err.statusText || ''} ${error}`;
        }else {
            errMessage = err.message ? err.message : err.toString();
            simpleError = errMessage;
        }
        this.setErrorMessage(simpleError);
        return Observable.throw(errMessage);
    }

    public setErrorMessage(err): void {
        this.errorMessageSource.next(err);
    }

    public clearMessage(message) {
        setTimeout(() => {
          message = '';
        }, 5000);
      }
}
