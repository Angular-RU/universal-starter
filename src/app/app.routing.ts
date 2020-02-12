import { Routes, RouterModule } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';

import { WrapperComponent } from '@shared/layouts/wrapper/wrapper.component';
import { AuthGuard } from '@shared/guards/auth.guard';
import { UnAuthGuard } from '@shared/guards/un-auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canLoad: [UnAuthGuard],
  },
  {
    path: '',
    component: WrapperComponent,
    canActivateChild: [MetaGuard],
    children: [{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }],
  },
  {
    path: '',
    component: WrapperComponent,
    canActivateChild: [MetaGuard, AuthGuard],
    children: [
      {
        path: 'mock',
        loadChildren: () => import('./mock-server-browser/mock-server-browser.module').then(m => m.MockServerBrowserModule),
      },
      { path: 'back', loadChildren: () => import('./transfer-back/transfer-back.module').then(m => m.TransferBackModule) },
      { path: 'async', loadChildren: () => import('./http-async/http-async.module').then(m => m.HttpAsyncModule) },
    ],
  },
  {
    path: '',
    component: WrapperComponent,
    canActivateChild: [MetaGuard],
    children: [
      {
        path: 'static/back',
        loadChildren: () => import('./transfer-back/transfer-back.module').then(m => m.TransferBackModule),
      },
    ],
  },
  {
    path: '',
    component: WrapperComponent,
    canActivateChild: [MetaGuard],
    children: [{ path: '**', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule) }],
  },
];
// must use {initialNavigation: 'enabled'}) - for one load page, without reload
export const AppRoutes = RouterModule.forRoot(routes, { initialNavigation: 'enabled' });
