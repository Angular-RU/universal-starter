import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

const LANG_LIST: string[] = ['en', 'ru'];
const DEFAULT_LANG: string = 'en';

@Injectable()
export class TranslatesService {
  constructor(private _translateService: TranslateService) {
    this._translateService.addLangs(LANG_LIST);
    this._translateService.setDefaultLang(DEFAULT_LANG);
    this._translateService.use(localStorage.getItem('lang') || DEFAULT_LANG);
  }

  public getCurrentLang(): string {
    return this._translateService.currentLang;
  }

  public changeLang(lang: string): void {
    localStorage.setItem('lang', lang);
    this._translateService.use(lang);
  }
}
