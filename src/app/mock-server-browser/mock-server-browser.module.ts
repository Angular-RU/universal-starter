import { MockBrowserComponent } from './mock-browser/mock-browser.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockServerBrowserComponent } from './mock-server-browser.component';
import { MockServerBrowserRoutes } from './mock-server-browser.routing';
import { MockBrowserModule } from './mock-browser/mock-browser.module';
import { MockServerModule } from './mock-server/mock-server.module';
import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    CommonModule,
    MockServerBrowserRoutes,
    environment.isServer ? [MockServerModule] : [MockBrowserModule]
  ],
  declarations: [MockServerBrowserComponent]
})
export class MockServerBrowserModule { }
