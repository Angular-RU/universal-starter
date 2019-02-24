import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
export { AppBrowserModule } from './app/app.browser.module';

if (environment.production) {
  enableProdMode();
}
