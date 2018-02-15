import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { TranslatesService } from './translates.service';

// export function httpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
// }

@NgModule({
  imports: [
    // TranslateModule.forRoot({
    //     loader: {
    //       provide: TranslateLoader,
    //       useFactory: httpLoaderFactory,
    //       deps: [HttpClient]
    //     }
    //   }
    // )
  ],
  providers: [TranslatesService]
})
export class TranslatesModule {
}
