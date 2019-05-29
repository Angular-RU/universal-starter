import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { MetaGuard } from '@ngx-meta/core';

const authRoutes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: '',
    component: AuthComponent, // Wrapper
    canActivateChild: [
      MetaGuard
    ],
    children: [
      {
        path: 'login',
        loadChildren: async () => {
            const { LoginModule } = await import('./components/login/login.module');
            return LoginModule;
        }
      },
      {
        path: 'registration',
        loadChildren: async () => {
            const { RegistrationModule } = await import('./components/registration/registration.module');
            return RegistrationModule;
        },
      },
    ],
  },
];

export const AuthRoutes = RouterModule.forChild(authRoutes);
