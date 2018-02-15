// angular
import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule, TransferState } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
// libs
import { TransferHttpCacheModule } from '@nguniversal/common';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
// shared
import { CookieStorage } from '../forStorage/browser.storage';
import { AppStorage } from '../forStorage/universal.inject';
// components
import { TranslateBrowserLoader } from './translate-browser-loader.service';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

// import { ServiceWorkerModule } from '@angular/service-worker';

// the Request object only lives on the server
export function getRequest(): any {
  return { headers: { cookie: document.cookie } };
}

export function exportTranslateStaticLoader(http: HttpClient, transferState: TransferState): TranslateBrowserLoader {
  return new TranslateBrowserLoader('/assets/i18n/', '.json', transferState, http);
}

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    TransferHttpCacheModule,
    BrowserTransferStateModule,
    TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: exportTranslateStaticLoader,
          deps: [HttpClient, TransferState]
        }
      }
    ),
    // ServiceWorkerModule.register('/ngsw-worker.js'),
    AppModule,
  ],
  providers: [
    {
      // The server provides these in main.server
      provide: REQUEST,
      useFactory: (getRequest)
    },
    { provide: AppStorage, useClass: CookieStorage },
    {
      provide: 'ORIGIN_URL',
      useValue: location.origin
    }
  ]
})
export class AppBrowserModule {
}
