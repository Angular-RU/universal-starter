import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthWrapperComponent } from './components/auth-wrapper/auth-wrapper.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ResetComponent } from './components/reset/reset.component';
import { EmbeddedComponent } from './components/embedded/embedded.component';
import { RestoreComponent } from './components/restore/restore.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '', component: AuthWrapperComponent, children: [
      { path: 'login', component: LoginComponent },
      { path: 'registration', component: RegistrationComponent },
      { path: 'reset', component: ResetComponent },
      { path: 'restore', component: RestoreComponent },
      { path: 'embedded', component: EmbeddedComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRouting { }
