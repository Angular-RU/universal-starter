import { MaterialPageComponent } from './materialPage.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: MaterialPageComponent },
];

export const MaterialPageRoutes = RouterModule.forChild(routes);
