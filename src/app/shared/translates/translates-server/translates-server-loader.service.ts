import { makeStateKey, StateKey, TransferState } from '@angular/platform-browser';

import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs';

const fs = require('fs');

export class TranslatesServerLoaderService implements TranslateLoader {
  constructor(
    private prefix: string = 'i18n',
    private suffix: string = '.json',
    private transferState: TransferState,
  ) {}

  public getTranslation(lang: string): Observable<any> {
    return Observable.create((observer) => {
      const jsonData: any = JSON.parse(
        fs.readFileSync(`${this.prefix}/${lang}${this.suffix}`, 'utf8'),
      );
      const key: StateKey<number> = makeStateKey<number>(`transfer-translate-${lang}`);
      this.transferState.set(key, jsonData);
      observer.next(jsonData);
      observer.complete();
    });
  }
}
