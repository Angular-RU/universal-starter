import { Component, OnInit } from '@angular/core';
import { Car } from '../../components/domain/car';
import { CarService } from '../../service/carservice';
import { Message } from 'primeng/components/common/api';

@Component({
    templateUrl: './datascrollerinfinitedemo.html',
    styles: [`
        .ui-grid-row > div {
            padding: 4px 10px;
            font-size: 20px;
        }
        .ui-grid-row .ui-grid-row > div:last-child {
            font-weight: bold;
        }
    `]
})
// tslint:disable-next-line:component-class-suffix
export class DataScrollerInfiniteDemo {

    cars: Car[];

    msgs: Message[] = [];

    constructor(private carService: CarService) { }

    async loadData(event): Promise<any> {
        // initialize
        if (!this.cars) {
            this.cars = await this.carService.getCarsSmallAsync();
            // in real application, newArray should be loaded from a remote datasource
        } else {
            const newArray = this.cars.slice(0);
            for (let i = 0; i < newArray.length; i++) {
                this.cars.push(newArray[i]);
            }
            this.msgs = [];
            // tslint:disable-next-line:max-line-length
            this.msgs.push({ severity: 'info', summary: 'Data Loaded', detail: 'Between ' + event.first + ' and ' + (event.first + event.rows) });
        }
    }
}
