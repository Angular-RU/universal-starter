import { Routes, RouterModule } from '@angular/router';
import { MockServerBrowserComponent } from './mock-server-browser.component';

const routes: Routes = [
  { path: '', component: MockServerBrowserComponent },
];

export const MockServerBrowserRoutes = RouterModule.forChild(routes);
