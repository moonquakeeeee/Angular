import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(
        request: HttpRequest<unknown>,
        next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
        // 请求拦截
        // 克隆并修改请求头
        const req = request.clone({
            // setHeaders: {
            //     hello: 'world',
            // },
            setParams: {
                key: 'testInterceptor',
            },
        });
        // 通过回调函数将修改后的请求回传给应用
        // 响应拦截
        return next.handle(req).pipe(
            retry(2),
            catchError((error: HttpErrorResponse) => throwError(error))
        );
    }
}
