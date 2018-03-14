// angular
import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// libs
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';
// shared
import { UniversalStorage } from '@shared/for-storage/server.storage';
import { AppStorage } from '@shared/for-storage/universal.inject';
import { TranslatesServerModule } from '@shared/translates/translates-server';
// components
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

@NgModule({
  imports: [
    AppModule,
    NoopAnimationsModule,
    ServerTransferStateModule,
    ServerModule,
    ModuleMapLoaderModule,
    TranslatesServerModule
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
