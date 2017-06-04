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

@NgModule({
    imports: [
        CommonModule,
        BackendRoutingModule,
        MdCardModule,
        MdButtonModule
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
        GoodsService
    ],
})
export class BackendModule {
}
