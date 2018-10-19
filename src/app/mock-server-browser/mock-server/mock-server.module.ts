import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockServerComponent } from './mock-server.component';
import { MockServerRoutes } from './mock-server.routing';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { environment } from '../../../environments/environment';

@NgModule({
  imports: [CommonModule, MockServerRoutes],
  declarations: [MockServerComponent],
  exports: [MockServerComponent],
})
export class MockServerModule {}
