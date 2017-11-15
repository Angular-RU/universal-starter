import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportOfWorkComponent } from './report-of-work.component';
import { ReportOfWorkRoutes } from './report-of-work.routing';

@NgModule({
  imports: [
    CommonModule,
    ReportOfWorkRoutes
  ],
  declarations: [ReportOfWorkComponent],
})
export class ReportOfWorkModule { }
