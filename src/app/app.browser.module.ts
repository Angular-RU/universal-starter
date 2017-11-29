import { CookieStorage } from './../forStorage/browser.storage';
import { AppStorage } from './../forStorage/universal.inject';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { BrowserPrebootModule } from 'preboot/browser';
// import { ServiceWorkerModule } from '@angular/service-worker';

export function getRequest(): any {
  // the Request object only lives on the server
  const result = { headers: { cookie: document.cookie } };

  return result;
}

@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'my-app'
    }),
    BrowserPrebootModule.replayEvents(),
    BrowserTransferStateModule,
    // ServiceWorkerModule.register('/ngsw-worker.js'),
    AppModule,
  ],
  providers: [
     {
        // The server provides these in main.server
        provide: REQUEST,
        useFactory: (getRequest)
    },
    { provide: AppStorage, useClass: CookieStorage }
  ]
})
export class BrowserAppModule {}
