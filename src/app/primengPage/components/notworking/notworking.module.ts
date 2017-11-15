import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotworkingComponent } from './notworking.component';
import { NotworkingRoutes } from './notworking.routing';

@NgModule({
  imports: [
    CommonModule,
    NotworkingRoutes
  ],
  declarations: [NotworkingComponent]
})
export class NotworkingModule { }
