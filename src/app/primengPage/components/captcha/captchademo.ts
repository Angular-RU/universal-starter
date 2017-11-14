import { Component } from '@angular/core';
import { Message } from 'primeng/components/common/api';

@Component({
    templateUrl: './captchademo.html'
})
// tslint:disable-next-line:component-class-suffix
export class CaptchaDemo {

    msgs: Message[] = [];

    showResponse(event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Success', detail: 'User Responsed' });
    }
}
