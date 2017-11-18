import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule', pathMatch: 'full' },
  { path: 'primeng', loadChildren: './primengPage/primengPage.module#PrimengPageModule' },
];

export const AppRoutes = RouterModule.forRoot(routes);
