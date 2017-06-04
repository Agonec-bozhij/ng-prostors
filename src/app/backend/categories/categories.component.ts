import {Component, HostBinding, OnInit} from '@angular/core';
import {routeFlipStateTrigger} from '../animations/backend-animations';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.less'],
    animations: [
        routeFlipStateTrigger
    ]
})
export class CategoriesComponent implements OnInit {

    @HostBinding('@routeFlipState') routeAnimation = true;

    constructor() {
    }

    ngOnInit() {
    }

}
