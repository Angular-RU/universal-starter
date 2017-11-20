import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule', pathMatch: 'full' },
  { path: 'material', loadChildren: './materialPage/materialPage.module#MaterialPageModule' },
  { path: 'back', loadChildren: './transfer-back/transfer-back.module#TransferBackModule' },
];
// must use {initialNavigation: 'enabled'}) - for one load page, without reload
export const AppRoutes = RouterModule.forRoot(routes, { initialNavigation: 'enabled' });
