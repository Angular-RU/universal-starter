import {Component} from '@angular/core';

@Component({
    templateUrl: './radiobuttondemo.html',
    styles: [`
        .ui-grid label {
            display: inline-block;
            margin: 3px 0px 0px 4px;
        }
    `]
})
// tslint:disable-next-line:component-class-suffix
export class RadioButtonDemo {

    val1: string;

    val2: string = 'Option 2';
}
