import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {


    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {

    }

    // tslint:disable-next-line:max-line-length
    canActivate(route: import ('@angular/router').ActivatedRouteSnapshot, state: import ('@angular/router').RouterStateSnapshot): boolean | import ('@angular/router').UrlTree | import ('rxjs').Observable<boolean | import ('@angular/router').UrlTree> | Promise<boolean | import ('@angular/router').UrlTree> {
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login']);
        return false;
    }
}
