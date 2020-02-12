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
        loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'registration',
        loadChildren: () => import('./components/registration/registration.module').then(m => m.RegistrationModule),
      },
    ],
  },
];

export const AuthRoutes = RouterModule.forChild(authRoutes);
