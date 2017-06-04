import {Component, HostBinding, OnInit} from '@angular/core';
import {routeFlipStateTrigger} from '../animations/backend-animations';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less'],
    animations: [
        routeFlipStateTrigger
    ]
})
export class HomeComponent implements OnInit {

    @HostBinding('@routeFlipState') routeAnimation = true;

    constructor() {
    }

    ngOnInit() {
    }

}
