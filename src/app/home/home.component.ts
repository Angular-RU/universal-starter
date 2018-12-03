import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';

import { TransferHttpService } from '@gorniv/ngx-transfer-http';
import { MetaService } from '@ngx-meta/core';
import { UniversalStorage } from '@shared/storage/universal.storage';
import { isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private http: TransferHttpService,
    private readonly meta: MetaService,
    private universalStorage: UniversalStorage,
  ) {}

  ngOnInit(): void {
      let resultCookie = this.universalStorage.getItem('test');
      console.log('home resultCookie 0:', resultCookie);

      this.universalStorage.setItem('test', 'test2');
      resultCookie = this.universalStorage.getItem('test');
      console.log('home resultCookie 1:', resultCookie);
      const t = window;
      const t1 = document;
      this.meta.setTag('description', 'Meta update from init');
  }
}
