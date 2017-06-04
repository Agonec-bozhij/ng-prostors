import {animate, state, style, transition, trigger} from '@angular/animations';

export const routeFlipStateTrigger = trigger('routeFlipState', [
    transition(':enter', [
        style({
            transform: 'rotateY(-180deg)',
            'z-index': '2'
        }),
        animate(700)
    ]),
    transition(':leave', animate(700, style({
        transform: 'rotateY(180deg)'
    })))
]);
