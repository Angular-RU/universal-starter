import { TransferBackComponent } from './transfer-back.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: TransferBackComponent,
    data: {
      meta: {
        title: 'Back title',
        description: 'Back description'
      }
    },
  },
];

export const TransferBackRoutes = RouterModule.forChild(routes);
