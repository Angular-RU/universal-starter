// angular
import { NgModule, ViewEncapsulation, Component } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// shared
import { TranslatesServerModule } from '@shared/translates/translates-server';
// components
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { InlineStyleComponent } from './inline-style/inline-style.component';
import { InlineStyleModule } from './inline-style/inline-style.module';
import { CookieService, CookieBackendService, CookieModule } from '@gorniv/ngx-universal';
import { REQUEST, RESPONSE } from '@nguniversal/express-engine/tokens';
import { NgxRequest, NgxResponse } from '@gorniv/ngx-universal';
import { environment } from 'environments/server/environment';

@NgModule({
  imports: [
    // AppModule - FIRST!!!
    AppModule,
    ServerModule,
    NoopAnimationsModule,
    ServerTransferStateModule,
    InlineStyleModule,
    TranslatesServerModule
],
  bootstrap: [AppComponent, InlineStyleComponent],
  providers: [
    { provide: CookieService, useClass: CookieBackendService },
    { 
      provide: REQUEST, 
      useValue: { cookie: '', headers: {} }, 
    }, 
    { 
      provide: RESPONSE, 
      useValue: {}, 
    }, 
    { 
      provide: NgxRequest, 
      useValue: { cookie: '', headers: {} }, 
    }, 
    { 
      provide: NgxResponse, 
      useValue: {}, 
    },
    { provide: 'ORIGIN_URL', useValue: environment.host },
  ],
})
export class AppServerModule {}
