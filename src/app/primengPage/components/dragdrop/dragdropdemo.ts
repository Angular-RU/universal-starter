import { Component } from '@angular/core';
import { Car } from '../../components/domain/car';
import { CarService } from '../../service/carservice';
import { OnInit } from '@angular/core';

@Component({
    templateUrl: './dragdropdemo.html',
    styles: [`
        .ui-grid li {
            list-style-type: none;
            padding: 10px;
            margin-bottom: 5px;
        }
    `]
})
// tslint:disable-next-line:component-class-suffix
export class DragDropDemo implements OnInit {

    availableCars: Car[];

    selectedCars: Car[];

    draggedCar: Car;

    constructor(private carService: CarService) { }

    async ngOnInit() {
        this.selectedCars = [];
        this.availableCars = await this.carService.getCarsSmallAsync().then(cars => cars);
    }

    dragStart(event, car: Car) {
        this.draggedCar = car;
    }

    drop(event) {
        if (this.draggedCar) {
            const draggedCarIndex = this.findIndex(this.draggedCar);
            this.selectedCars = [...this.selectedCars, this.draggedCar];
            this.availableCars = this.availableCars.filter((val, i) => i !== draggedCarIndex);
            this.draggedCar = null;
        }
    }

    dragEnd(event) {
        this.draggedCar = null;
    }

    findIndex(car: Car) {
        let index = -1;
        for (let i = 0; i < this.availableCars.length; i++) {
            if (car.vin === this.availableCars[i].vin) {
                index = i;
                break;
            }
        }
        return index;
    }

}
