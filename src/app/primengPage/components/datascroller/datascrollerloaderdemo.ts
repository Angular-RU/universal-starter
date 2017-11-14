import { Component, OnInit } from '@angular/core';
import { Car } from '../../components/domain/car';
import { CarService } from '../../service/carservice';

@Component({
    templateUrl: './datascrollerloaderdemo.html',
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
export class DataScrollerLoaderDemo implements OnInit {

    cars: Car[];

    selectedCar: Car;

    displayDialog: boolean;

    constructor(private carService: CarService) { }

    async ngOnInit() {
        this.cars = await this.carService.getCarsMediumAsync();
    }

    selectCar(car: Car) {
        this.selectedCar = car;
        this.displayDialog = true;
    }

    onDialogHide() {
        this.selectedCar = null;
    }
}
