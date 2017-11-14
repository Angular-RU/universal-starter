import { Component, OnInit } from '@angular/core';
import { Car } from '../../components/domain/car';
import { CarService } from '../../service/carservice';

class PrimeCar implements Car {

    constructor(public vin?, public year?, public brand?, public color?) { }
}

@Component({
    templateUrl: './datatablecruddemo.html',
    styles: [`
        .ui-grid-row div {
          padding: 4px 10px
        }

        .ui-grid-row div label {
          font-weight: bold;
        }
  `]
})

// tslint:disable-next-line:component-class-suffix
export class DataTableCrudDemo implements OnInit {

    displayDialog: boolean;

    car: Car = new PrimeCar();

    selectedCar: Car;

    newCar: boolean;

    cars: Car[];

    constructor(private carService: CarService) { }

    async ngOnInit() {
        this.cars = await this.carService.getCarsSmallAsync();
    }

    showDialogToAdd() {
        this.newCar = true;
        this.car = new PrimeCar();
        this.displayDialog = true;
    }

    save() {
        const cars = [...this.cars];
        if (this.newCar) {
            cars.push(this.car);
        } else {
            cars[this.findSelectedCarIndex()] = this.car;
        }

        this.cars = cars;
        this.car = null;
        this.displayDialog = false;
    }

    delete() {
        const index = this.findSelectedCarIndex();
        this.cars = this.cars.filter((val, i) => i !== index);
        this.car = null;
        this.displayDialog = false;
    }

    onRowSelect(event) {
        this.newCar = false;
        this.car = this.cloneCar(event.data);
        this.displayDialog = true;
    }

    cloneCar(c: Car): Car {
        const car = new PrimeCar();
        // tslint:disable-next-line:forin
        for (const prop in c) {
            car[prop] = c[prop];
        }
        return car;
    }

    findSelectedCarIndex(): number {
        return this.cars.indexOf(this.selectedCar);
    }
}
