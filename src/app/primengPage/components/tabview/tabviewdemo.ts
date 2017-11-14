import { Component } from '@angular/core';
import { Message } from 'primeng/components/common/api';

@Component({
    templateUrl: './tabviewdemo.html'
})
// tslint:disable-next-line:component-class-suffix
export class TabViewDemo {

    msgs: Message[];

    onTabChange(event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Tab Expanded', detail: 'Index: ' + event.index });
    }
}
