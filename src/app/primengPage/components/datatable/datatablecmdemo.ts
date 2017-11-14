import { Component, OnInit } from '@angular/core';
import { Car } from '../../components/domain/car';
import { CarService } from '../../service/carservice';
import { Message, MenuItem } from 'primeng/components/common/api';

@Component({
    templateUrl: './datatablecmdemo.html'
})
// tslint:disable-next-line:component-class-suffix
export class DataTableCMDemo implements OnInit {

    msgs: Message[];

    cars: Car[];

    selectedCar: Car;

    items: MenuItem[];

    constructor(private carService: CarService) { }

    async ngOnInit() {
        this.cars = await this.carService.getCarsSmallAsync();

        this.items = [
            { label: 'View', icon: 'fa-search', command: (event) => this.viewCar(this.selectedCar) },
            { label: 'Delete', icon: 'fa-close', command: (event) => this.deleteCar(this.selectedCar) }
        ];
    }

    viewCar(car: Car) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Car Selected', detail: car.vin + ' - ' + car.brand });
    }

    deleteCar(car: Car) {
        let index = -1;
        for (let i = 0; i < this.cars.length; i++) {
            if (this.cars[i].vin === car.vin) {
                index = i;
                break;
            }
        }
        this.cars.splice(index, 1);

        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Car Deleted', detail: car.vin + ' - ' + car.brand });
    }
}
