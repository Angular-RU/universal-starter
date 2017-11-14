import { Component, OnInit } from '@angular/core';
import { Car } from '../../components/domain/car';
import { CarService } from '../../service/carservice';

@Component({
    templateUrl: './datalistdemo.html',
    styles: [`
        .car-item {
            padding: 1.5em;
            border-bottom: 1px solid #d9d9d9;
        }
        .ui-g > div {
            padding: .4em;
        }
        .ui-g .ui-g-10 {
            font-weight: bold;
        }
        @media (max-width: 40em) {
            .car-details {
                text-align:center;
            }
        }
    `]
})
// tslint:disable-next-line:component-class-suffix
export class DataListDemo implements OnInit {

    cars: Car[];

    constructor(private carService: CarService) { }

    async ngOnInit() {
        this.cars = await this.carService.getCarsLargeAsync();
    }
}
