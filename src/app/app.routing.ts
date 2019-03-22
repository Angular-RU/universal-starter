import { Routes, RouterModule } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';

import { WrapperComponent } from '@shared/layouts/wrapper/wrapper.component';

// Guards
import { AuthGuard } from '@shared/guards/auth.guard';
import { UnAuthGuard } from '@shared/guards/un-auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', canLoad: [UnAuthGuard], loadChildren: './auth/auth.module#AuthModule'},
  {
    path: '',
    component: WrapperComponent,
    canActivate: [AuthGuard],
    canActivateChild: [MetaGuard],
    children: [
      { path: 'home', loadChildren: './home/home.module#HomeModule' },
      {
        path: 'mock',
        loadChildren: './mock-server-browser/mock-server-browser.module#MockServerBrowserModule',
      },
      { path: 'back', loadChildren: './transfer-back/transfer-back.module#TransferBackModule' },
      {
        path: 'static/back',
        loadChildren: './transfer-back/transfer-back.module#TransferBackModule',
      },
      { path: 'async', loadChildren: './http-async/http-async.module#HttpAsyncModule' },
      { path: '**', loadChildren: './not-found/not-found.module#NotFoundModule' },
    ],
  },
];
// must use {initialNavigation: 'enabled'}) - for one load page, without reload
export const AppRoutes = RouterModule.forRoot(routes, { initialNavigation: 'enabled' });
