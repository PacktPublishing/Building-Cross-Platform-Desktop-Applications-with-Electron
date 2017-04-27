import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

declare var FB: any;


@Injectable()
export class LoggedInGuard implements CanActivate {
    constructor(private router: Router) {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        if (state.url !== '/login') {
            FB.getLoginStatus((response: any) => {
                if (response.status !== 'connected') {
                    this.router.navigate(['/login']);
                    return false;
                }
            });
        }
        return true;
    }
}