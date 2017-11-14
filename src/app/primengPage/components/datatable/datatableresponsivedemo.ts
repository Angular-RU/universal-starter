import { Component, OnInit } from '@angular/core';
import { Car } from '../../components/domain/car';
import { CarService } from '../../service/carservice';

@Component({
    templateUrl: './datatableresponsivedemo.html',
})
// tslint:disable-next-line:component-class-suffix
export class DataTableResponsiveDemo implements OnInit {

    cars: Car[];

    stacked: boolean;

    constructor(private carService: CarService) { }

    async ngOnInit() {
        this.cars = await this.carService.getCarsMediumAsync();
    }

    toggle() {
        this.stacked = !this.stacked;
    }
}
