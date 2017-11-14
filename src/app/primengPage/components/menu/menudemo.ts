import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/components/common/api';

@Component({
    templateUrl: './menudemo.html'
})
// tslint:disable-next-line:component-class-suffix
export class MenuDemo implements OnInit {

    items: MenuItem[];

    ngOnInit() {
        this.items = [{
            label: 'File',
            items: [
                { label: 'New', icon: 'fa-plus', command: () => { } },
                { label: 'Open', icon: 'fa-download' }
            ]
        },
        {
            label: 'Edit',
            items: [
                { label: 'Undo', icon: 'fa-refresh' },
                { label: 'Redo', icon: 'fa-repeat' }
            ]
        }];
    }
}
