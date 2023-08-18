import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanDeactivate,
    RouterStateSnapshot,
    UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentLeave {
    canLeave: () => boolean;
}

@Injectable({
    providedIn: 'root',
})
export class UnsaveGuard implements CanDeactivate<CanComponentLeave> {
    canDeactivate(
        component: CanComponentLeave,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        if (component.canLeave()) {
            return true;
        } else {
            if (confirm('confirm leave?')) {
                return true;
            } else {
                return false;
            }
        }
    }
}
