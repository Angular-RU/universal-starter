import { Injectable, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { AppStorage } from '@shared/for-storage/universal.inject';

import { ITranslatesLanguage } from './translates.interface';

const LANGUAGES: ITranslatesLanguage[] = [
  { value: 'ru', name: 'Русский' },
  { value: 'en', name: 'English' }
];
const LANG_LIST: string[] = ['en', 'ru'];
const DEFAULT_LANG: string = 'en';

@Injectable()
export class TranslatesService {
  constructor(private _translateService: TranslateService,
              @Inject(AppStorage) private _appStorage: Storage) {
    this._translateService.addLangs(LANG_LIST);
    this._translateService.setDefaultLang(DEFAULT_LANG);
    this._translateService.use(this._appStorage.getItem('lang') || DEFAULT_LANG);
  }

  public getLanguages(): ITranslatesLanguage[] {
    return LANGUAGES;
  }

  public getCurrentLang(): string {
    return this._translateService.currentLang;
  }

  public changeLang(lang: string): void {
    this._appStorage.setItem('lang', lang);
    this._translateService.use(lang);
  }
}
