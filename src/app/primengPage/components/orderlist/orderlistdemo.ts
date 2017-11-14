import { Component } from '@angular/core';
import { Car } from '../../components/domain/car';
import { CarService } from '../../service/carservice';
import { OnInit } from '@angular/core';

@Component({
    templateUrl: './orderlistdemo.html'
})
// tslint:disable-next-line:component-class-suffix
export class OrderListDemo implements OnInit {

    cars: Car[];

    constructor(private carService: CarService) { }

    async ngOnInit() {
        this.cars = await this.carService.getCarsSmallAsync();
    }
}
