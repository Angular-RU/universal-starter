import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';

import { TransferHttpService } from '@gorniv/ngx-universal';
import { MetaService } from '@ngx-meta/core';
import { UniversalStorage } from '@shared/storage/universal.storage';
import { DOCUMENT, isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  errorMessage: string;
  constructor(
    @Inject(PLATFORM_ID) private _platformId: Object,
    private _http: TransferHttpService,
    private readonly _meta: MetaService,
    private _universalStorage: UniversalStorage,
    // instead window.document
    @Inject(DOCUMENT) private _document: Document,
  ) {}

  ngOnInit(): void {
    this._universalStorage.removeItem('test');
    let resultCookie = this._universalStorage.getItem('test');
    if (resultCookie) {
      this.errorMessage = 'Cookie remove item not working';
      console.log('Cookie put remove not working');
    }
    console.log('home resultCookie 0:', resultCookie);
    this._universalStorage.setItem('test', 'test2');
    resultCookie = this._universalStorage.getItem('test');
    if (!resultCookie) {
      this.errorMessage = 'Cookie put item not working';
      console.log('Cookie put item not working');
    }
    console.log('home resultCookie 1:', resultCookie);
    const t = window;
    const t1 = document;
    this._meta.setTag('description', 'Meta update from init');
  }
}
