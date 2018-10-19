import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockBrowserComponent } from './mock-browser.component';
import { MockBrowserRoutes } from './mock-browser.routing';
import { environment } from '../../../environments/environment';

@NgModule({
  imports: [CommonModule, MockBrowserRoutes],
  declarations: [MockBrowserComponent],
  exports: [MockBrowserComponent],
})
export class MockBrowserModule {}
