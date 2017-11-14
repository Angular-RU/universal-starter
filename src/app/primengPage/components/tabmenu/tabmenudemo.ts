import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/api';

@Component({
    templateUrl: './tabmenudemo.html'
})
// tslint:disable-next-line:component-class-suffix
export class TabMenuDemo implements OnInit {

    items: MenuItem[];

    ngOnInit() {
        this.items = [
            { label: 'Stats', icon: 'fa-bar-chart' },
            { label: 'Calendar', icon: 'fa-calendar' },
            { label: 'Documentation', icon: 'fa-book' },
            { label: 'Support', icon: 'fa-support' },
            { label: 'Social', icon: 'fa-twitter' }
        ];
    }
}
