import { HomeRoutes } from './home.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutes,
    TranslateModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
