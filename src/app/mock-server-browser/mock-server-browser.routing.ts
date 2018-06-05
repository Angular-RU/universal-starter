import { Routes, RouterModule } from '@angular/router';
import { MockServerBrowserComponent } from './mock-server-browser.component';

const routes: Routes = [
  {
    path: '', component: MockServerBrowserComponent,
    data: {
      meta: {
        title: 'mock.title',
        description: 'mock.description'
      }
    },
  },
];

export const MockServerBrowserRoutes = RouterModule.forChild(routes);
