import { AppRoutes } from './app.routing';
import { RouterModule } from '@angular/router';
import { TransferHttpModule } from '../modules/transfer-http/transfer-http.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';
import { MetaModule, MetaSettings } from '@ngx-meta/core';
import { MetaLoader } from '@ngx-meta/core';
import { MetaStaticLoader } from '@ngx-meta/core';
import { PageTitlePositioning } from '@ngx-meta/core';
import { PrebootModule } from 'preboot';
import { SharedModule } from '@shared/shared.module';

export function metaFactory(): MetaLoader {
  const setting: MetaSettings = {
    callback: (key: string) => key,
    pageTitlePositioning: PageTitlePositioning.PrependPageTitle,
    pageTitleSeparator: ' | ',
    applicationName: 'App Universal',
    // applicationUrl: 'https://gorniv.com/',
    defaults: {
      title: 'default page title',
      description: 'default description',
      'og:site_name': 'App site Universal',
      'og:type': 'website',
      'og:locale': 'ru_RU',
      'og:locale:alternate': 'en_GB'
    }
  };
  return new MetaStaticLoader(setting);
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    PrebootModule.withConfig({ appRoot: 'app-root' }),
    HttpClientModule,
    RouterModule,
    AppRoutes,
    TransferHttpModule,
    BrowserAnimationsModule,
    SharedModule.forRoot(),
    MetaModule.forRoot({
      provide: MetaLoader,
      useFactory: metaFactory,
      deps: []
    })
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
