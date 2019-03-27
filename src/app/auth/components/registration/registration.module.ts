import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { RegistrationRoutes } from './registration.routing';
import { SharedFormsModule } from '@shared/shared-forms/shared-forms.module';
import { TranslatesService } from '@shared/translates';

@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    CommonModule,
    RegistrationRoutes,
    SharedFormsModule
  ]
})
export class RegistrationModule { }
