import { NodeService } from './service/nodeservice';
import { EventService } from './service/eventservice';
import { CountryService } from './service/countryservice';
import { CarService } from './service/carservice';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { PrimengPageComponent } from './primengPage.component';
import { PrimengPageRoutes } from './primengPage.routing';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PrimengPageRoutes,
  ],
  declarations: [PrimengPageComponent],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    CarService, CountryService, EventService, NodeService
  ],
  exports: [PrimengPageComponent]
})
export class PrimengPageModule { }
