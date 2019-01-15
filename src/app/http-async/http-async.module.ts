import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpAsyncComponent } from './http-async.component';
import { HttpAsyncRoutes } from './http-async.routing';

@NgModule({
  imports: [CommonModule, HttpAsyncRoutes],
  declarations: [HttpAsyncComponent],
})
export class HttpAsyncModule {}
