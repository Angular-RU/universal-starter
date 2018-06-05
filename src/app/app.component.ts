import { Component, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Data, RouterEvent, NavigationStart, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { MetaService } from '@ngx-meta/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

import { Observable, BehaviorSubject } from 'rxjs';
import { filter, takeWhile } from 'rxjs/operators';

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
    ).subscribe(this.setTitleAndMeta);

    this.router.events.pipe(
      takeWhile(() => this.alive),
      filter((event: RouterEvent) => event instanceof NavigationEnd)
    ).subscribe(this.setTitleAndMeta);
  }

  public ngOnDestroy(): void {
    this.alive = false;
  }

  private setTitleAndMeta = (): void => {
    const { meta } = this.getRouteData();
    const title = this.translate.instant(meta.title);
    const description = this.translate.instant(meta.description);
    this.titleService.setTitle(title);
    this.meta.setTag('og:title', title);
    this.meta.setTag('og:description', description);
    this.meta.setTag('description', description);
  }

  private getRouteData(): Data {
    let route = this.route;
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route.data instanceof BehaviorSubject && route.data.getValue();
  }
}
