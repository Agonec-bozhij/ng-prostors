import {NgModule} from '@angular/core';

import {HeaderComponent} from './header/header.component';
import { FrontendComponent } from './frontend.component';
import {AppRoutingModule} from '../app-routing.module';

@NgModule({
    imports: [
        AppRoutingModule
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
