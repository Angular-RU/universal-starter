import { Component } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private readonly meta: MetaService) {
    this.meta.setTag('og:title', 'home ctor');
  }
}
