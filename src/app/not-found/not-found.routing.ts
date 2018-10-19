import { NotFoundComponent } from './not-found.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: NotFoundComponent,
    data: {
      meta: {
        title: 'not-found.title',
        description: 'not-found.text',
      },
    },
  },
];

export const NotFoundRoutes = RouterModule.forChild(routes);
