import { Component } from '@angular/core';
import { OverlayPanel } from 'primeng/components/overlaypanel/overlaypanel';
import { Car } from '../../components/domain/car';
import { CarService } from '../../service/carservice';
import { OnInit } from '@angular/core';

@Component({
    templateUrl: './overlaypaneldemo.html'
})
// tslint:disable-next-line:component-class-suffix
export class OverlayPanelDemo implements OnInit {

    cars1: Car[];

    cars2: Car[];

    selectedCar: Car;

    constructor(private carService: CarService) { }

    async ngOnInit() {
        this.cars1 = await this.carService.getCarsSmallAsync();
        this.cars2 = await this.carService.getCarsSmallAsync();
    }

    selectCar(event, car: Car, overlaypanel: OverlayPanel) {
        this.selectedCar = car;
        overlaypanel.toggle(event);
    }
}
