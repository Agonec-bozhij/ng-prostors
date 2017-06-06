import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.less']
})
export class FrontendComponent implements OnInit {

    options: Object;

    constructor() {
        this.options = {
            title : { text : 'simple chart' },
            series: [{
                data: [29.9, 71.5, 106.4, 129.2],
            }]
        };
    }

  ngOnInit() {
  }

}
