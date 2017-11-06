import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengPageComponent } from './primengPage.component';
import { PrimengPageRoutes } from './primengPage.routing';

@NgModule({
  imports: [
    CommonModule,
    PrimengPageRoutes
  ],
  declarations: [PrimengPageComponent]
})
export class PrimengPageModule { }
