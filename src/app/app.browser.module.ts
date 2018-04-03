// angular
import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
// libs
import { TransferHttpCacheModule } from '@nguniversal/common';
import { REQUEST } from '@nguniversal/express-engine/tokens';
// shared
import { CookieStorage } from '@shared/for-storage/browser.storage';
import { AppStorage } from '@shared/for-storage/universal.inject';
import { TranslatesBrowserModule } from '@shared/translates/translates-browser';
// components
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

// import { ServiceWorkerModule } from '@angular/service-worker';

// the Request object only lives on the server
export function getRequest(): any {
  return { headers: { cookie: document.cookie } };
}

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    TransferHttpCacheModule,
    BrowserTransferStateModule,
    // ServiceWorkerModule.register('/ngsw-worker.js'),
    AppModule,
    TranslatesBrowserModule
  ],
  providers: [
    {
      // The server provides these in main.server
      provide: REQUEST, useFactory: (getRequest)
    },
    { provide: AppStorage, useClass: CookieStorage },
    { provide: 'ORIGIN_URL', useValue: location.origin }
  ]
})
export class AppBrowserModule {
}
