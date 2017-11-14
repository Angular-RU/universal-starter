import { Component, OnInit } from '@angular/core';
import { Car } from '../../components/domain/car';
import { CarService } from '../../service/carservice';

@Component({
    templateUrl: './datatablesortdemo.html'
})
// tslint:disable-next-line:component-class-suffix
export class DataTableSortDemo implements OnInit {

    cars1: Car[];

    cars2: Car[];

    sortO: number = 1;

    sortF: string = '';

    constructor(private carService: CarService) { }

    async ngOnInit() {
        this.cars1 = await this.carService.getCarsMediumAsync();
        this.cars2 = await this.carService.getCarsMediumAsync();
    }

    changeSort(event) {
        if (!event.order) {
            this.sortF = 'year';
        } else {
            this.sortF = event.field;
        }
    }
}
