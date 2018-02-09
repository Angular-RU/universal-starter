import { Routes, RouterModule } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';

const routes: Routes = [
  {
    path: '', loadChildren: './home/home.module#HomeModule',
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
  { path: 'material', loadChildren: './materialPage/materialPage.module#MaterialPageModule' },
  // 404
  { path: '404', loadChildren: './not-found/not-found.module#NotFoundModule' },
  { path: '**', redirectTo: '404', pathMatch: 'full' }
];
// must use {initialNavigation: 'enabled'}) - for one load page, without reload
export const AppRoutes = RouterModule.forRoot(routes, { initialNavigation: 'enabled' });
