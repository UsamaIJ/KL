import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpParams
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let params = {
            'consumer_key':'ck_46a686785baa6cc6220bad248fe4991cbc3045c6',
            'consumer_secret':'cs_0b7b8be8e199c771656da5ceaeb64acbace8976d'
        }
        request = request.clone({
            url: 'https://khareedlay.pk/wp-json/wc/v3/'.concat(request.url),
            setParams: params
        });
        return next.handle(request);
    }
}
