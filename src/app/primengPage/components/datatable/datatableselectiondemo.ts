import { Component, OnInit } from '@angular/core';
import { Car } from '../../components/domain/car';
import { CarService } from '../../service/carservice';
import { Message } from 'primeng/components/common/api';

@Component({
    templateUrl: './datatableselectiondemo.html',
})
// tslint:disable-next-line:component-class-suffix
export class DataTableSelectionDemo implements OnInit {

    msgs: Message[];

    cars: Car[];

    selectedCar1: Car;

    selectedCar2: Car;

    selectedCar3: Car;

    selectedCars1: Car[];

    selectedCars2: Car[];

    selectedCars3: Car[];

    constructor(private carService: CarService) { }

    async ngOnInit() {
        this.cars = await this.carService.getCarsMediumAsync();
    }

    onRowSelect(event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Car Selected', detail: event.data.vin + ' - ' + event.data.brand });
    }

    onRowUnselect(event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Car Unselected', detail: event.data.vin + ' - ' + event.data.brand });
    }
}
