import { Component } from '@angular/core';

@Component({
    templateUrl: './inputtextdemo.html'
})
// tslint:disable-next-line:component-class-suffix
export class InputTextDemo {

    text: string;

    disabled: boolean = true;

    toggleDisabled() {
        this.disabled = !this.disabled;
    }
}
