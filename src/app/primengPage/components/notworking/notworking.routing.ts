import { NotworkingComponent } from './notworking.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '' , component: NotworkingComponent },
];

export const NotworkingRoutes = RouterModule.forChild(routes);
