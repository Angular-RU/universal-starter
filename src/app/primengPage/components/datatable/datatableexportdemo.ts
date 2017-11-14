import { Component, OnInit } from '@angular/core';
import { Car } from '../../components/domain/car';
import { CarService } from '../../service/carservice';

@Component({
    templateUrl: './datatableexportdemo.html'
})
// tslint:disable-next-line:component-class-suffix
export class DataTableExportDemo implements OnInit {

    cars: Car[];

    selectedCars: Car[];

    constructor(private carService: CarService) { }

    async ngOnInit() {
        this.cars = await this.carService.getCarsSmallAsync();
    }

}
