import { Component, OnInit } from '@angular/core';

import { TranslatesService } from '@shared/translates/translates.service';

const LANGUAGES: any[] = [
  { value: 'ru', name: 'Русский' },
  { value: 'en', name: 'English' }
];

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html'
})
export class ToolbarComponent implements OnInit {
  public languages: any[] = LANGUAGES;
  public currentLang;

  constructor(private _translatesService: TranslatesService) {
  }

  ngOnInit() {
    this.currentLang = this._translatesService.getCurrentLang();
  }

  public changeLang(lang: string): void {
    this._translatesService.changeLang(lang);
  }
}
