import { NotFoundComponent } from './not-found.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: NotFoundComponent,
    data: {
      meta: {
        title: 'Not Found',
        description: 'Page not found'
      }
    },
  },
];

export const NotFoundRoutes = RouterModule.forChild(routes);
