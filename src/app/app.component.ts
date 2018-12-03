import { Component } from '@angular/core';

import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  constructor(private readonly meta: MetaService) {
    this.meta.setTag('og:title', 'home ctor');
  }
}
