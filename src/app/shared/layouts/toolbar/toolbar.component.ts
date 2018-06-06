import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html'
})
export class ToolbarComponent implements OnInit {
  public currentLang: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
