import { Component, OnInit } from '@angular/core';
import { Car } from '../../components/domain/car';
import { CarService } from '../../service/carservice';

@Component({
    templateUrl: './datagriddemo.html'
})
// tslint:disable-next-line:component-class-suffix
export class DataGridDemo implements OnInit {

    cars: Car[];

    selectedCar: Car;

    displayDialog: boolean;

    constructor(private carService: CarService) { }

    async ngOnInit() {
        this.cars = await this.carService.getCarsLargeAsync();
    }

    selectCar(car: Car) {
        this.selectedCar = car;
        this.displayDialog = true;
    }

    onDialogHide() {
        this.selectedCar = null;
    }
}
