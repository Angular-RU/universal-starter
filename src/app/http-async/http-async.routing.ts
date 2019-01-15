import { Routes, RouterModule } from '@angular/router';
import { HttpAsyncComponent } from './http-async.component';

const routes: Routes = [{ path: '', component: HttpAsyncComponent }];

export const HttpAsyncRoutes = RouterModule.forChild(routes);
