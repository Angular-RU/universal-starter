import { Component, OnInit } from '@angular/core';

import { TranslatesService } from '@shared/translates';

const LANGUAGES: any[] = [
  { value: 'ru', name: 'Русский' },
  { value: 'en', name: 'English' }
];

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html'
})
export class ToolbarComponent implements OnInit {
  public languages: ITranslatesLanguage[];
  public currentLang: string;

  constructor(private _translatesService: TranslatesService) {
  }

  ngOnInit() {
    this.languages = this._translatesService.getLanguages();
    this.currentLang = this._translatesService.getCurrentLang();
  }

  public changeLang(lang: string): void {
    this._translatesService.changeLang(lang);
  }
}
