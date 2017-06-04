import { animate, style, transition, trigger } from '@angular/animations';

export const authZoomStateTrigger = trigger('authZoomState', [
    transition(':enter', [
        style({
            transform: 'scale(0.5)'
        }),
        animate(300)
    ]),
    transition(':leave', animate(300, style({
        transform: 'scale(0.5)'
    })))
]);
