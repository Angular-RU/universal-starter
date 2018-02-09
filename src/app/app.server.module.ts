import { UniversalStorage } from './../forStorage/server.storage';
import { AppStorage } from './../forStorage/universal.inject';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { ServerTransferStateModule } from '@angular/platform-server';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';

const fs = require('fs');

export class TranslateUniversalLoader implements TranslateLoader {
  constructor(private prefix: string = 'i18n', private suffix: string = '.json') {
  }

  public getTranslation(lang: string): Observable<any> {
    return Observable.create(observer => {
      observer.next(JSON.parse(fs.readFileSync(`${this.prefix}/${lang}${this.suffix}`, 'utf8')));
      observer.complete();
    });
  }
}

export function translateFactory() {
  return new TranslateUniversalLoader('./dist/assets/i18n', '.json');
}

@NgModule({
  imports: [
    AppModule,
    NoopAnimationsModule,
    ServerTransferStateModule,
    ServerModule,
    ModuleMapLoaderModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateFactory
      }
    }),
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: AppStorage, useClass: UniversalStorage
    }
  ],
})
export class AppServerModule { }
