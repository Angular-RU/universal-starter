import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import {
  TranslateService as NGXTranslateService,
  MissingTranslationHandler,
  MissingTranslationHandlerParams,
} from '@ngx-translate/core';
import { MetaService } from '@ngx-meta/core';
import { Observable, of } from 'rxjs';

import { ILang } from './translates.interface';
import { UniversalStorage } from '@shared/storage/universal.storage';

const LANG_LIST: ILang[] = [
  { code: 'ru', name: 'Русский', culture: 'ru-RU' },
  { code: 'en', name: 'English', culture: 'en-US' },
];
const LANG_DEFAULT: ILang = LANG_LIST[0];
const STORAGE_LANG_NAME: string = 'langCode';

@Injectable()
export class TranslatesService {
  constructor(
    @Inject(PLATFORM_ID) private _platformId: Object,
    @Inject(DOCUMENT) private _document: any,
    @Inject(REQUEST) private _request: any,
    @Inject(NGXTranslateService) private _translate: NGXTranslateService,
    @Inject(MetaService) private _meta: MetaService,
    @Inject(REQUEST) private _req: any,
    @Inject(UniversalStorage) private _appStorage: Storage,
  ) {}

  public initLanguage(): Promise<any> {
    return new Promise((resolve: Function) => {
      this._translate.addLangs(LANG_LIST.map((lang: ILang) => lang.code));
      const language: ILang = this._getLanguage();
      if (language) {
        this._translate.setDefaultLang(language.code);
      } else {
        this._translate.setDefaultLang(LANG_DEFAULT.code);
      }
      this._setLanguage(language);
      resolve();
    });
  }

  private _getLanguage(): ILang {
    let language: ILang = this._getFindLang(this._appStorage.getItem(STORAGE_LANG_NAME));
    if (language) {
      return language;
    }
    if (isPlatformBrowser(this._platformId)) {
      language = this._getFindLang(this._translate.getBrowserLang());
    }
    if (isPlatformServer(this._platformId)) {
      try {
        const reqLangList: string[] = this._request.headers['accept-language']
          .split(';')[0]
          .split(',');
        language = LANG_LIST.find(
          (lang: ILang) =>
            reqLangList.indexOf(lang.code) !== -1 || reqLangList.indexOf(lang.culture) !== -1,
        );
      } catch (err) {
        language = LANG_DEFAULT;
      }
    }
    language = language || LANG_DEFAULT;
    this._appStorage.setItem(STORAGE_LANG_NAME, language.code);
    return language;
  }

  private _getFindLang(code: string): ILang | null {
    return code ? LANG_LIST.find((lang: ILang) => lang.code === code) : null;
  }

  private _setLanguage(lang: ILang): void {
    this._translate.use(lang.code).subscribe(() => {
      this._meta.setTag('og:locale', lang.culture);
      this._document.documentElement.lang = lang.code;
    });
  }

  public changeLang(code: string): void {
    const lang: ILang = this._getFindLang(code);
    if (!lang || lang.code === this._translate.currentLang) {
      return;
    }
    this._appStorage.setItem(STORAGE_LANG_NAME, lang.code);
    this._setLanguage(lang);
  }

  public getLangList(): Observable<ILang[]> {
    return of(LANG_LIST);
  }

  public getCurrentLang(): string {
    return this._translate.currentLang;
  }
}

export class CommonMissingTranslationHandler implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams) {
    if (
      params.key.match(/\w+\.\w+/) &&
      params.translateService.translations['ru'] &&
      !params.translateService.translations['ru'][params.key]
    ) {
      console.warn(`Нехватает перевода для "${params.key}"`);
    }
    return params.key;
  }
}
