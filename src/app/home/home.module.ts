import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutes } from './home.routing';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutes,
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
