import { Routes, RouterModule } from '@angular/router';
import { MockBrowserComponent } from './mock-browser.component';

const routes: Routes = [{ path: 'mock-browser', component: MockBrowserComponent }];

export const MockBrowserRoutes = RouterModule.forChild(routes);
