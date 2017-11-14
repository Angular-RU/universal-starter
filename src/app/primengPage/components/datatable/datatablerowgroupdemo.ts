import { Component, OnInit } from '@angular/core';
import { Car } from '../../components/domain/car';
import { CarService } from '../../service/carservice';
import { SelectItem } from 'primeng/components/common/api';

@Component({
    templateUrl: './datatablerowgroupdemo.html'
})
// tslint:disable-next-line:component-class-suffix
export class DataTableRowGroupDemo implements OnInit {

    cars1: Car[];

    cars2: Car[];

    cars3: Car[];

    constructor(private carService: CarService) { }

    async ngOnInit() {
        this.cars1 = await this.carService.getCarsMediumAsync();
        this.cars2 = await this.carService.getCarsMediumAsync();
        this.cars3 = await this.carService.getCarsMediumAsync();
    }

    calculateGroupTotal(brand: string) {
        let total = 0;

        if (this.cars1) {
            for (const car of this.cars1) {
                if (car.brand === brand) {
                    total += car.price;
                }
            }
        }

        return total;
    }
}
