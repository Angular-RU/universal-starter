import { Component, OnInit } from '@angular/core';
import { Car } from '../../components/domain/car';
import { CarService } from '../../service/carservice';

@Component({
    templateUrl: './picklistdemo.html'
})
// tslint:disable-next-line:component-class-suffix
export class PickListDemo implements OnInit {

    sourceCars: Car[];

    targetCars: Car[];

    constructor(private carService: CarService) { }

    async ngOnInit() {
        this.sourceCars = await this.carService.getCarsSmallAsync();
        this.targetCars = [];
    }
}
