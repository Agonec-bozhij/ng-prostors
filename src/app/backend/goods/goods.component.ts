import {Component, HostBinding, OnInit} from '@angular/core';
import {routeFlipStateTrigger} from '../animations/backend-animations';
import {GoodsService} from '../services/goods-service.service';

@Component({
    selector: 'app-goods',
    templateUrl: './goods.component.html',
    styleUrls: ['./goods.component.less'],
    animations: [
        routeFlipStateTrigger
    ]
})
export class GoodsComponent implements OnInit {

    goods;

    @HostBinding('@routeFlipState') routeAnimation = true;

    constructor(private goodsService: GoodsService) {
    }

    ngOnInit() {
        this.goods = this.goodsService.getGoods();
    }

}
