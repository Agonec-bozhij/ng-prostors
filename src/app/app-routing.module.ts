import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {FrontendComponent} from './frontend/frontend.component';
import {BackendComponent} from './backend/backend.component';
import {AuthGuard} from './auth/auth-guard.service';

const appRoutes: Routes = [
    {path: '', component: FrontendComponent, pathMatch: 'full'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
    ]
})
export class AppRoutingModule {
}

