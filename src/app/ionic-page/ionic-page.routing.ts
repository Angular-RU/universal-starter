import { Routes, RouterModule } from '@angular/router';
import { IonicPageComponent } from './ionic-page.component';

const routes: Routes = [
  { path: '', component: IonicPageComponent },
];

export const IonicPageRoutes = RouterModule.forChild(routes);
