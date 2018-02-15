import { Injectable, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppStorage } from 'forStorage/universal.inject';

const LANG_LIST: string[] = ['en', 'ru'];
const DEFAULT_LANG: string = 'en';

@Injectable()
export class TranslatesService {
  constructor(private _translateService: TranslateService,
    @Inject(AppStorage) private appStorage: Storage) {
    // this._translateService.addLangs(LANG_LIST);
    // this._translateService.setDefaultLang(DEFAULT_LANG);
    this._translateService.use(this.appStorage.getItem('lang') || DEFAULT_LANG);
  }

  public getCurrentLang(): string {
    return this._translateService.currentLang;
  }

  public changeLang(lang: string): void {
    this.appStorage.setItem('lang', lang);
    this._translateService.use(lang);
  }
}
