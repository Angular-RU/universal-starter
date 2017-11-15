import { ReportOfWorkComponent } from './report-of-work.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ReportOfWorkComponent },
];

export const ReportOfWorkRoutes = RouterModule.forChild(routes);
