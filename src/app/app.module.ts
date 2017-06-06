import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {FrontendModule} from './frontend/frontend.module';
import {AppRoutingModule} from './app-routing.module';
import {BackendModule} from './backend/backend.module';
import {AuthModule} from './auth/auth.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthService} from './auth/auth.service';
import {AuthGuard} from './auth/auth-guard.service';
import {ChartModule} from "angular2-highcharts";
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import * as highcharts from 'highcharts';

export function highchartsFactory() {
    return highcharts;
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        AuthModule,
        FrontendModule,
        BackendModule,
        ChartModule
    ],
    exports: [
    ],
    providers: [AuthService, AuthGuard, {
        provide: HighchartsStatic,
        useFactory: highchartsFactory
    }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
