import { Component, OnInit } from '@angular/core';
import { Car } from '../../components/domain/car';
import { CarService } from '../../service/carservice';

@Component({
    templateUrl: './datatablerowexpansiondemo.html',
    styles: [`
        .label {
            font-weight: bold
        }
    `]
})
// tslint:disable-next-line:component-class-suffix
export class DataTableRowExpansionDemo implements OnInit {

    cars: Car[];

    cols: any[];

    selectedCar: Car;

    dialogVisible: boolean;

    constructor(private carService: CarService) { }

    async ngOnInit() {
        this.cars = await this.carService.getCarsMediumAsync();

        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
    }

    showCar(car: Car) {
        this.selectedCar = car;
        this.dialogVisible = true;
    }
}
