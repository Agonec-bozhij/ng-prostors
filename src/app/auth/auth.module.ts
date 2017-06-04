import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SigninComponent} from './signin/signin.component';
import {AuthRoutingModule} from './auth-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [
        ReactiveFormsModule,
        CommonModule,
        AuthRoutingModule
    ],
    declarations: [SigninComponent]
})
export class AuthModule {
}
