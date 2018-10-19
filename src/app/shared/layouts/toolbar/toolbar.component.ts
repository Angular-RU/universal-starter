import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { TranslatesService, ILang } from '@shared/translates';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
})
export class ToolbarComponent implements OnInit {
  public langList$: Observable<ILang[]>;
  public currentLang: string;

  constructor(private _translatesService: TranslatesService) {}

  ngOnInit(): void {
    this.langList$ = this._translatesService.getLangList();
    this.currentLang = this._translatesService.getCurrentLang();
  }

  public changeLang(code: string): void {
    this._translatesService.changeLang(code);
  }
}
