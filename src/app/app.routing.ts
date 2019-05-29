import { Routes, RouterModule } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';

import { WrapperComponent } from '@shared/layouts/wrapper/wrapper.component';
import { AuthGuard } from '@shared/guards/auth.guard';
import { UnAuthGuard } from '@shared/guards/un-auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: async () => {
        const { AuthModule } = await import('./auth/auth.module');
        return AuthModule;
    },
    canLoad: [UnAuthGuard],
  },
  {
    path: '',
    component: WrapperComponent,
    canActivateChild: [MetaGuard],
    children: [{ path: 'home', loadChildren: async () => {
                                   const { HomeModule } = await import('./home/home.module');
                                   return HomeModule;
                               } }],
  },
  {
    path: '',
    component: WrapperComponent,
    canActivateChild: [MetaGuard, AuthGuard],
    children: [
      {
        path: 'mock',
        loadChildren: async () => {
            const { MockServerBrowserModule } = await import('./mock-server-browser/mock-server-browser.module');
            return MockServerBrowserModule;
        },
      },
      { path: 'back', loadChildren: async () => {
                          const { TransferBackModule } = await import('./transfer-back/transfer-back.module');
                          return TransferBackModule;
                      } },
      { path: 'async', loadChildren: async () => {
                           const { HttpAsyncModule } = await import('./http-async/http-async.module');
                           return HttpAsyncModule;
                       } },
    ],
  },
  {
    path: '',
    component: WrapperComponent,
    canActivateChild: [MetaGuard],
    children: [
      {
        path: 'static/back',
        loadChildren: async () => {
            const { TransferBackModule } = await import('./transfer-back/transfer-back.module');
            return TransferBackModule;
        },
      },
    ],
  },
  {
    path: '',
    component: WrapperComponent,
    canActivateChild: [MetaGuard],
    children: [{ path: '**', loadChildren: async () => {
                                 const { NotFoundModule } = await import('./not-found/not-found.module');
                                 return NotFoundModule;
                             } }],
  },
];
// must use {initialNavigation: 'enabled'}) - for one load page, without reload
export const AppRoutes = RouterModule.forRoot(routes, { initialNavigation: 'enabled' });
