import { Routes, RouterModule } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';

import { WrapperComponent } from '@shared/layouts/wrapper/wrapper.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '', component: WrapperComponent, children: [
      {
        path: 'home', loadChildren: './home/home.module#HomeModule',
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
      { path: 'back', loadChildren: './transfer-back/transfer-back.module#TransferBackModule', canActivateChild: [MetaGuard] },
      // 404
      { path: '**', loadChildren: './not-found/not-found.module#NotFoundModule' },
    ]
  }
];
// must use {initialNavigation: 'enabled'}) - for one load page, without reload
export const AppRoutes = RouterModule.forRoot(routes, { initialNavigation: 'enabled' });
