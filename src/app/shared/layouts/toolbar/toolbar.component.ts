import { Component } from '@angular/core';

import { TranslateService } from '@shared/translate/translate.service';

const LANGUAGES: any[] = [
  { value: 'ru', name: 'Русский' },
  { value: 'en', name: 'English' }
];

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html'
})
export class ToolbarComponent {
  public languages: any[] = LANGUAGES;

  constructor(private _translateService: TranslateService) {
  }

  public changeLang(lang: string): void {
    this._translateService.changeLang(lang);
  }
}
