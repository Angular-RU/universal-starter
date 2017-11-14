import { Component } from '@angular/core';

@Component({
    templateUrl: './checkboxdemo.html',
    styles: [`
        .ui-grid .ui-grid-col-1,
        .ui-grid .ui-grid-col-11 {
            padding: 4px 10px;
        }

        .ui-grid label {
            display: block;
            margin: 2px 0 0 4px;
        }
    `]
})
// tslint:disable-next-line:component-class-suffix
export class CheckboxDemo {

    selectedCities: string[] = [];

    selectedCategories: string[] = ['Technology', 'Sports'];

    checked: boolean = false;
}
