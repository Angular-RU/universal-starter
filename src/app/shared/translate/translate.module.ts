import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { TranslateService } from './translate.service';

@NgModule({
  imports: [],
  providers: [TranslateService]
})
export class TranslateModule {
}
