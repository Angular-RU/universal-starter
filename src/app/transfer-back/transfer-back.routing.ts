import { TransferBackComponent } from './transfer-back.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: TransferBackComponent,
    data: {
      meta: {
        title: {
            en: 'Back title',
            ru: 'Назад'
        },
        description: 'Back description'
      }
    },
  },
];

export const TransferBackRoutes = RouterModule.forChild(routes);
