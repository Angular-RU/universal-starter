import { NgModule } from '@angular/core';
import { TransferState } from '@angular/platform-browser';

import { TranslateLoader, TranslateModule, MissingTranslationHandler } from '@ngx-translate/core';

import {
  TranslatesService,
  CommonMissingTranslationHandler,
} from '@shared/translates/translates.service';

import { TranslatesServerLoaderService } from './translates-server-loader.service';

export function translateFactory(transferState: TransferState): TranslatesServerLoaderService {
  return new TranslatesServerLoaderService('./dist/assets/i18n', '.json', transferState);
}

@NgModule({
  imports: [
    TranslateModule.forRoot({
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useClass: CommonMissingTranslationHandler,
      },
      loader: {
        provide: TranslateLoader,
        useFactory: translateFactory,
        deps: [TransferState],
      },
    }),
  ],
  providers: [TranslatesService],
})
export class TranslatesServerModule {}
