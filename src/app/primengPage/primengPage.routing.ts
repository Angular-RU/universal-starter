import { PrimengPageComponent } from './primengPage.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: PrimengPageComponent },
];

export const PrimengPageRoutes = RouterModule.forChild(routes);
