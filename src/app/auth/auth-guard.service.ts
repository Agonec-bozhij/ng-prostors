import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        return true;
        // return this.authService.isAuthenticated().map(
        //     (auth) => {
        //         console.log('Мы прошли аутентификацию.');
        //         return true;
        //     },
        //     (error) => {
        //         console.log('Не прошли');
        //         this.router.navigate(['signin']);
        //         return false;
        //     }
        // ).catch((error) => {
        //     this.router.navigate(['/signin']);
        //     return Observable.throw(error);
        // });
    }
}
