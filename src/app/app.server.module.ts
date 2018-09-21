// angular
import { NgModule, ViewEncapsulation, Component } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// libs
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
// shared
import { UniversalStorage } from '@shared/for-storage/server.storage';
import { AppStorage } from '@shared/for-storage/universal.inject';
import { TranslatesServerModule } from '@shared/translates/translates-server';
// components
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { InlineStyleComponent } from './inline-style/inline-style.component';
import { InlineStyleModule } from './inline-style/inline-style.module';

@NgModule({
  imports: [
    AppModule,
    NoopAnimationsModule,
    ServerTransferStateModule,
    ServerModule,
    InlineStyleModule,
    ModuleMapLoaderModule,
    TranslatesServerModule
  ],
  bootstrap: [AppComponent, InlineStyleComponent],
  providers: [
    { provide: AppStorage, useClass: UniversalStorage }
  ],
})
export class AppServerModule {
}
