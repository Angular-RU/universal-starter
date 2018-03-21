import { Component, OnInit } from '@angular/core';

import { TranslatesService, ITranslatesLanguage } from '@shared/translates';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html'
})
export class ToolbarComponent implements OnInit {
  public languages: ITranslatesLanguage[];
  public currentLang: string;

  constructor(private _translatesService: TranslatesService) {
  }

  ngOnInit(): void {
    this.languages = this._translatesService.getLanguages();
    this.currentLang = this._translatesService.getCurrentLang();
  }

  public changeLang(lang: string): void {
    this._translatesService.changeLang(lang);
  }
}
