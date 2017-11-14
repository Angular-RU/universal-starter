import { Component, OnInit } from '@angular/core';
import { Car } from '../../components/domain/car';
import { CarService } from '../../service/carservice';
import { SelectItem } from 'primeng/components/common/api';

@Component({
    templateUrl: './datatablecoltogglerdemo.html'
})
// tslint:disable-next-line:component-class-suffix
export class DataTableColTogglerDemo implements OnInit {

    cars: Car[];

    cols: any[];

    columnOptions: SelectItem[];

    constructor(private carService: CarService) { }

    async ngOnInit() {
        this.cars = await this.carService.getCarsSmallAsync();

        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];

        this.columnOptions = [];
        for (let i = 0; i < this.cols.length; i++) {
            this.columnOptions.push({ label: this.cols[i].header, value: this.cols[i] });
        }
    }
}
