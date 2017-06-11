import {NgModule} from '@angular/core';

import {BackendComponent} from './backend.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import {BackendRoutingModule} from './backend-routing.module';
import {AuthService} from '../auth/auth.service';
import {CommonModule} from '@angular/common';
import { GoodsComponent } from './goods/goods.component';
import { CategoriesComponent } from './categories/categories.component';
import {MdButtonModule, MdCardModule} from '@angular/material';
import {GoodsService} from './services/goods-service.service';
import * as highcharts from 'highcharts';
import {ChartModule} from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';

declare var require: any;

export function highchartsFactory() {
    const hc = require('highcharts/highstock');
    const dd = require('highcharts/modules/exporting');
    dd(hc);
    return hc;
}



@NgModule({
    imports: [
        CommonModule,
        BackendRoutingModule,
        MdCardModule,
        MdButtonModule,
        ChartModule
    ],
    exports: [
        BackendRoutingModule
    ],
    declarations: [
        BackendComponent,
        HeaderComponent,
        HomeComponent,
        GoodsComponent,
        CategoriesComponent
    ],
    providers: [
        GoodsService,
        {
            provide: HighchartsStatic,
            useFactory: highchartsFactory
        }
    ],
})
export class BackendModule {
}
