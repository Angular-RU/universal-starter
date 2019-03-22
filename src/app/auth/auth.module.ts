import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRouting } from './auth.routing';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ResetComponent } from './components/reset/reset.component';
import { RestoreComponent } from './components/restore/restore.component';
import { EmbeddedComponent } from './components/embedded/embedded.component';
import { AuthWrapperComponent } from './components/auth-wrapper/auth-wrapper.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    ResetComponent,
    RestoreComponent,
    EmbeddedComponent,
    AuthWrapperComponent,
  ],
  imports: [
    CommonModule,
    AuthRouting,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class AuthModule {
}
