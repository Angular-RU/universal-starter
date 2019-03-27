import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutes } from './login.routing';
import { SharedFormsModule } from '@shared/shared-forms/shared-forms.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutes,
    SharedFormsModule
  ]
})
export class LoginModule { }
