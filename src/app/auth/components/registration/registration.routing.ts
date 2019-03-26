import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration.component';

const registrationRoutes: Routes = [
  {
    path: '',
    component: RegistrationComponent,
    data: {
      meta: {
        title: 'auth.registration.title',
        description: 'auth.registration.text',
        override: true,
      },
    }
  }
];

export const RegistrationRoutes = RouterModule.forChild(registrationRoutes);
