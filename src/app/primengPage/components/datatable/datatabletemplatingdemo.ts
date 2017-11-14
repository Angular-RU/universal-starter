import { Component, OnInit } from '@angular/core';
import { Car } from '../../components/domain/car';
import { CarService } from '../../service/carservice';
import { Message } from 'primeng/components/common/api';

@Component({
    templateUrl: './datatabletemplatingdemo.html',
})
// tslint:disable-next-line:component-class-suffix
export class DataTableTemplatingDemo implements OnInit {

    cars: Car[];

    msgs: Message[] = [];

    constructor(private carService: CarService) { }

    async ngOnInit() {
        this.cars = await this.carService.getCarsSmallAsync();
    }

    selectCar(car: Car) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Car Select', detail: 'Vin: ' + car.vin });
    }
}
