import { PizzaComponent } from './pizza/pizza.component';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import {
  CdkTableModule,
  DataSource
} from '@angular/cdk/table';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-materialPage',
  templateUrl: './materialPage.component.html',
  styleUrls: ['./materialPage.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MaterialPageComponent {


  /** List of columns for the CDK and Material table. */
  tableColumns = ['userId'];

  /** Data source for the CDK and Material table. */
  tableDataSource: DataSource<any> = {
    connect: () => Observable.of([
      { userId: 1 },
      { userId: 2 }
    ]),
    disconnect: () => { }
  };
  options: [
    'test',
    'test2'
  ];

  constructor(public snackBar: MatSnackBar, breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      if (result.matches) {
        this.activateHandsetLayout();
      }
    });
  }

  activateHandsetLayout(): any {
  }

  openSnackBar() {
    this.snackBar.openFromComponent(PizzaComponent, {
      duration: 500,
    });
  }
}
