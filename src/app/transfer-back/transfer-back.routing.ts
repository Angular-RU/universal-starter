import { TransferBackComponent } from './transfer-back.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '' , component: TransferBackComponent},
];

export const TransferBackRoutes = RouterModule.forChild(routes);
