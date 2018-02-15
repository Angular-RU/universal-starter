import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransferState } from '@angular/platform-browser';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { TranslatesService } from '@shared/translates/translates.service';

import { TranslatesBrowserLoaderService } from './translates-browser-loader.service';

export function translateStaticLoader(http: HttpClient, transferState: TransferState): TranslatesBrowserLoaderService {
  return new TranslatesBrowserLoaderService('/assets/i18n/', '.json', transferState, http);
}

@NgModule({
  imports: [
    TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: translateStaticLoader,
          deps: [HttpClient, TransferState]
        }
      }
    ),
  ],
  providers: [TranslatesService]
})
export class TranslatesBrowserModule {
}
