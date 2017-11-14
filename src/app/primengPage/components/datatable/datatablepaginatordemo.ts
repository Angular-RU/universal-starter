import { Component, OnInit } from '@angular/core';
import { Car } from '../../components/domain/car';
import { CarService } from '../../service/carservice';

@Component({
    templateUrl: './datatablepaginatordemo.html',
})
// tslint:disable-next-line:component-class-suffix
export class DataTablePaginatorDemo implements OnInit {

    cars: Car[];

    constructor(private carService: CarService) { }

    async ngOnInit() {
        this.cars = await this.carService.getCarsMediumAsync();
    }
}
