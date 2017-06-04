import {Component, HostBinding, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../auth.service';
import {authZoomStateTrigger} from '../auth-animations';
import {Response} from '@angular/http';
import {Router} from '@angular/router';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.less'],
    animations: [
        authZoomStateTrigger
    ]
})
export class SigninComponent implements OnInit {

    loginForm: FormGroup;

    constructor(private authService: AuthService, private router: Router) {
    }

    ngOnInit() {
        this.loginForm = new FormGroup({
            'username': new FormControl(''),
            'password': new FormControl('')
        });
    }

    onSubmit() {

        this.authService.login(this.loginForm.value).subscribe(
            (response: Response) => {
                this.authService.token = response.json().token;
                this.router.navigate(['/admin']);
            },
            (error) => {
                console.log('error:', error);
            }
        );
        console.log(this.loginForm.value);
    }

}
