import { Component } from '@angular/core';

@Component({
    templateUrl: './dialogdemo.html'
})
// tslint:disable-next-line:component-class-suffix
export class DialogDemo {

    display: boolean = false;

    showDialog() {
        this.display = true;
    }

    hideDialog() {
        this.display = false;
    }

}
