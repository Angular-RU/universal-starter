// angular
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// libs
import { CookieService, CookieModule } from 'ngx-cookie';
import { TransferHttpCacheModule } from '@nguniversal/common';
// shared
import { SharedModule } from '@shared/shared.module';
import { TranslatesService } from '@shared/translates';

import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

// components
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { AppState } from './app.state';
import { environment } from 'environments/environment';
import { UniversalStorage } from '@shared/storage/universal.storage';

export function initLanguage(translateService: TranslatesService): Function {
  return (): Promise<any> => translateService.initLanguage();
}

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    TransferHttpCacheModule,
    HttpClientModule,
    RouterModule,
    AppRoutes,
    BrowserAnimationsModule,
    CookieModule.forRoot(),
    SharedModule.forRoot(),
    NgxsModule.forRoot([
      AppState,
    ]),
    NgxsLoggerPluginModule.forRoot({
      collapsed: false,
      disabled: environment.production
    }),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production,
    }),
  ],
  declarations: [AppComponent],
  providers: [
    CookieService,
    UniversalStorage,
    { provide: APP_INITIALIZER, useFactory: initLanguage, multi: true, deps: [TranslatesService] },
  ],
})
export class AppModule {}
