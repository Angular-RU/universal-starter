import { UniversalStorage } from './../forStorage/server.storage';
import { AppStorage } from './../forStorage/universal.inject';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ApplicationRef, APP_BOOTSTRAP_LISTENER } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { BrowserModule } from '@angular/platform-browser';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { ServerTransferStateModule } from '@angular/platform-server';
import { ServerPrebootModule } from 'preboot/server';

@NgModule({
  imports: [
    AppModule,
    NoopAnimationsModule,
    ServerTransferStateModule,
    ServerModule,
    ModuleMapLoaderModule,
    ServerPrebootModule.recordEvents({ appRoot: 'app-root' })
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: AppStorage, useClass: UniversalStorage
    }
  ],
})
export class AppServerModule { }
