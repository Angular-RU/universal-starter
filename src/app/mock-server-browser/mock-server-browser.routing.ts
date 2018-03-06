import { Routes, RouterModule } from '@angular/router';
import { MockServerBrowserComponent } from './mock-server-browser.component';

const routes: Routes = [
  {
    path: '', component: MockServerBrowserComponent,
    data: {
      meta: {
        title: 'Mock title',
        description: 'Mock description'
      }
    },
  },
];

export const MockServerBrowserRoutes = RouterModule.forChild(routes);
