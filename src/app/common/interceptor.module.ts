import { Injectable, NgModule} from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { catchError, mergeMap } from 'rxjs/operators';

import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@Injectable()
export class RestInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("Intercepted");
        // const updatedReq = req.clone({ headers: req.headers.set('Auth', 'some sample key') });
        // return next.handle(dupReq);

        return next.handle(req).do((event: HttpEvent<any>) => {}, (err: any) => {
            if (err instanceof HttpErrorResponse) {
                if (err instanceof HttpErrorResponse) {
                    switch(err.status){
                        case 400:
                            break;
                        case 401:
                            break;
                        case 403:
                            break;
                        case 404:
                            console.log('404 Handled');
                            break;
                        case 500:
                            break;
                        
                    }
            }
          }}
        );
    }
}
  
@NgModule({
    providers: [ { 
            provide: HTTP_INTERCEPTORS, 
            useClass: RestInterceptor, 
            multi: true 
        }
    ]
})
export class InterceptorModule { }