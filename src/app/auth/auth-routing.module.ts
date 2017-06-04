import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SigninComponent} from './signin/signin.component';
import {AuthGuard} from './auth-guard.service';


const routes: Routes = [
    {path: 'signin', component: SigninComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
        AuthGuard
    ]
})
export class AuthRoutingModule {
}
