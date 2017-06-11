import {AfterViewInit, Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {routeFlipStateTrigger} from '../animations/backend-animations';
import {Http} from '@angular/http';


@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.less'],
    animations: [
        routeFlipStateTrigger
    ]
})

export class CategoriesComponent implements OnInit, AfterViewInit, OnDestroy {

    @HostBinding('@routeFlipState') routeAnimation = true;

    options: any;
    chart: any;
    interval: any;

    constructor(private http: Http) {
        this.http.get('https://cdn.rawgit.com/gevgeny/angular2-highcharts/99c6324d/examples/aapl.json').subscribe(res => {
            this.options = {
                title: {
                    text: 'AAPL stock price by minute'
                },

                subtitle: {
                    text: 'Using explicit breaks for nights and weekends'
                },
                series: [{
                    name: 'AAPL',
                    data: res.json(),
                    tooltip: {
                        valueDecimals: 2
                    }
                }]
            };


        });
    }


    ngOnInit() {
    }

    ngAfterViewInit() {

        this.interval = setInterval(
            () =>
                this.chart.series[0].addPoint([+new Date(), Math.random() * 100])
            , 1000);
    }

    saveInstance(chartInstance) {
        this.chart = chartInstance;
        console.log(this.chart);
    }

    ngOnDestroy() {
        clearInterval(this.interval);
    }
}
