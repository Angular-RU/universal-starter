import { Component, OnInit } from '@angular/core';
import { Car } from '../../components/domain/car';
import { CarService } from '../../service/carservice';

@Component({
    templateUrl: './datatabledemo.html'
})
// tslint:disable-next-line:component-class-suffix
export class DataTableDemo implements OnInit {

    loading: boolean;

    cars: Car[];

    cols: any[];

    constructor(private carService: CarService) { }

    async ngOnInit() {
        this.loading = true;
        setTimeout(async () => {
            this.cars = await this.carService.getCarsSmallAsync();
            this.loading = false;
        }, 1000);

        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
    }
}
