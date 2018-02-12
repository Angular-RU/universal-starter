import { Component } from '@angular/core';

import { TranslatesService } from '@shared/translates/translates.service';

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

  constructor(private _translatesService: TranslatesService) {
  }

  public changeLang(lang: string): void {
    this._translatesService.changeLang(lang);
  }
}
