import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-frontend',
    templateUrl: './frontend.component.html',
    styleUrls: ['./frontend.component.less']
})
export class FrontendComponent implements OnInit {

    @Input() type: string;

    public current_type = 'Купить';
    public current_object = 'Квартиру';

    public settings = {
        types: {
            list: [
                {
                    id: 1,
                    value: 'Купить'
                },
                {
                    id: 2,
                    value: 'Снять'
                }
            ]
        },
        objects: {
            list: [
                {
                    id: 1,
                    value: 'Квартиру'
                },
                {
                    id: 2,
                    value: 'Комнату'
                }
            ]
        }
    };

    constructor() {
        console.log(this.settings.types);
    }

    ngOnInit() {
    }

    onActivateFilter(event) {
        console.log(event);
    }

    onClickedOutside(e) {
        console.log('Clicked outside:', e);
    }

}
