import {NgModule} from '@angular/core';

import {HeaderComponent} from './header/header.component';
import { FrontendComponent } from './frontend.component';
import {AppRoutingModule} from '../app-routing.module';
import {ChartModule} from 'angular2-highcharts';
import {CommonModule} from '@angular/common';
import { MainDropdownDirective } from './main-dropdown.directive';
import {ClickOutsideModule} from 'ng-click-outside';

@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule,
        ChartModule,
        ClickOutsideModule
    ],
    exports: [
        AppRoutingModule,
        FrontendComponent
    ],
    declarations: [
        HeaderComponent,
        FrontendComponent,
        MainDropdownDirective
    ],
    providers: [],
})
export class FrontendModule {
}
