import { Component, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Data, RouterEvent, NavigationStart, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { MetaService } from '@ngx-meta/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { takeWhile } from 'rxjs/operators/takeWhile';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnDestroy {
  private alive = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private meta: MetaService,
    private translate: TranslateService,
    private titleService: Title
  ) {
    this.meta.setTag('og:title', 'home ctor');

    this.translate.onLangChange.pipe(
      takeWhile(() => this.alive)
    ).subscribe((change: LangChangeEvent) => {
      const { meta } = this.getRouteData();
      this.titleService.setTitle(this.translate.instant(meta.title));
    });

    this.router.events.pipe(
      takeWhile(() => this.alive),
      filter((event: RouterEvent) => event instanceof NavigationEnd)
    ).subscribe(() => {
      const { meta } = this.getRouteData();
      this.titleService.setTitle(this.translate.instant(meta.title));
    });
  }

  public ngOnDestroy(): void {
    this.alive = false;
  }

  private getRouteData(): Data {
    let route = this.route;
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route.data instanceof BehaviorSubject && route.data.getValue();
  }
}
