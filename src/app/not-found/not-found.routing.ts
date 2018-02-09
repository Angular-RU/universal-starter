import { NotFoundComponent } from './not-found.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '' , component: NotFoundComponent},
];

export const NotFoundRoutes = RouterModule.forChild(routes);
