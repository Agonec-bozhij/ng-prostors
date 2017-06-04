import {Injectable, OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';
// import {Observable} from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

@Injectable()
export class GoodsService {

    constructor(private http: Http) {

    }

    getGoods() {
        return this.http.get('/api/admin/goods')
            .map(
                (response: Response) => {
                    return response.json();
                }
            );
    }

}
