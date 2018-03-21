import { Component } from '@angular/core';

import { MetaService } from '@ngx-meta/core';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/fromPromise';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  constructor(private readonly meta: MetaService) {
    this.meta.setTag('og:title', 'home ctor');
  }
}
