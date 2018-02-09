import { Component } from '@angular/core';
import { MetaService } from '@ngx-meta/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private readonly meta: MetaService,
              private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.meta.setTag('og:title', 'home ctor');
  }

  changeLang(lang: string): void {
    this.translate.use(lang);
  }
}
