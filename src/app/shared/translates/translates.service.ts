import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

const DEFAULT_LANG: string = 'ru';

@Injectable()
export class TranslatesService {
  constructor(private _translateService: TranslateService) {
    this._translateService.setDefaultLang(DEFAULT_LANG);
  }

  public changeLang(lang: string): void {
    this._translateService.use(lang);
  }
}
