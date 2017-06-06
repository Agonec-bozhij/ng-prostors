import {NgModule} from '@angular/core';

import {HeaderComponent} from './header/header.component';
import { FrontendComponent } from './frontend.component';
import {AppRoutingModule} from '../app-routing.module';
import {ChartModule} from "angular2-highcharts";

@NgModule({
    imports: [
        AppRoutingModule,
        ChartModule
    ],
    exports: [
        AppRoutingModule,
        FrontendComponent
    ],
    declarations: [
        HeaderComponent,
        FrontendComponent
    ],
    providers: [],
})
export class FrontendModule {
}
