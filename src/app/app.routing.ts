import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule', pathMatch: 'full' },
  { path: 'mock', loadChildren: './mock-server-browser/mock-server-browser.module#MockServerBrowserModule' },
  { path: 'back', loadChildren: './transfer-back/transfer-back.module#TransferBackModule' },
];

export const AppRoutes = RouterModule.forRoot(routes);
