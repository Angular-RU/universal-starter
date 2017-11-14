import { Component } from '@angular/core';

@Component({
    templateUrl: './buttondemo.html'
})
// tslint:disable-next-line:component-class-suffix
export class ButtonDemo {

    clicks: number = 0;

    count() {
        this.clicks++;
    }
}