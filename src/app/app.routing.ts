import { Routes, RouterModule } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';

const routes: Routes = [
  {
    path: '', loadChildren: './home/home.module#HomeModule', pathMatch: 'full',
    data: {
      // for override default meta
      meta: {
        title: 'home title',
        override: true,
        description: 'home description'
      }
    },
    // need for default meta
    canActivateChild: [MetaGuard],
  },
  // without meta
  { path: 'mock', loadChildren: './mock-server-browser/mock-server-browser.module#MockServerBrowserModule' },
  // with meta
  { path: 'back', loadChildren: './transfer-back/transfer-back.module#TransferBackModule', canActivateChild: [MetaGuard]},
];
// must use {initialNavigation: 'enabled'}) - for one load page, without reload
export const AppRoutes = RouterModule.forRoot(routes, { initialNavigation: 'enabled' });
