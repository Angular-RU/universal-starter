import { MockServerBrowserComponent } from './../mock-server-browser.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'mock-server', component: MockServerBrowserComponent }];

export const MockServerRoutes = RouterModule.forChild(routes);
