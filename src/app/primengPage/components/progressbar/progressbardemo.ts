import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/components/common/api';

@Component({
    templateUrl: './progressbardemo.html'
})
// tslint:disable-next-line:component-class-suffix
export class ProgressBarDemo implements OnInit {

    value: number = 0;

    msgs: Message[];

    ngOnInit() {
        const interval = setInterval(() => {
            this.value = this.value + Math.floor(Math.random() * 10) + 1;
            if (this.value >= 100) {
                this.value = 100;
                this.msgs = [{ severity: 'info', summary: 'Success', detail: 'Process Completed' }];
                clearInterval(interval);
            }
        }, 2000);
    }

}
