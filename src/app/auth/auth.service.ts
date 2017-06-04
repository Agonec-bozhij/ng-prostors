import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Headers, Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {
    token: string = null;

    constructor(private router: Router, private http: Http) {
    }

    login(credentials) {
        console.log(credentials);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('/api/admin/auth', credentials, {headers: headers});
    }

    isAuthenticated() {
        return this.checkAuth();
    }

    checkAuth() {
        const headers = new Headers({'Content-Type': 'text/plain', 'Authorization': 'Bearer ' + this.token});
        return this.http.get('/api/admin/user/check', {headers: headers});
    }
}
