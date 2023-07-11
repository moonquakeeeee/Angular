import { Injectable } from '@angular/core';
import {
    Router,
    Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class GetNameResolver implements Resolve<string> {
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Promise<string> {
        // return of('test1');
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('air1');
            }, 1000);
        });
    }
}
