// angular
import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { TransferState } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// libs
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';
// shared
import { UniversalStorage } from '../forStorage/server.storage';
import { AppStorage } from '../forStorage/universal.inject';
// components
import { TranslateServerLoader } from './translate-server-loader.service';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';


export function translateFactory(transferState: TransferState): TranslateServerLoader {
  return new TranslateServerLoader('./dist/assets/i18n', '.json', transferState);
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
        useFactory: translateFactory,
        deps: [TransferState]
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
export class AppServerModule {
}
