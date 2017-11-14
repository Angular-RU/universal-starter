import { Component } from '@angular/core';
import { Car } from '../../components/domain/car';
import { CarService } from '../../service/carservice';
import { Message } from 'primeng/components/common/api';

@Component({
    templateUrl: './deferdemo.html'
})
// tslint:disable-next-line:component-class-suffix
export class DeferDemo {

    cars: Car[];

    msgs: Message[] = [];

    constructor(private carService: CarService) { }

    async initData() {
        this.msgs = [{ severity: 'success', summary: 'Data Initialized', detail: 'Render Completed' }];
        this.cars = await this.carService.getCarsSmallAsync();
    }
}
