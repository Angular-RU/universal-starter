import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-primengPage',
  templateUrl: './primengPage.component.html',
  styleUrls: ['./primengPage.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PrimengPageComponent implements OnInit {

  menuActive: boolean;

  activeMenuId: string;

  constructor() {

  }

  ngOnInit() {

  }

  changeTheme(event: Event, theme: string) {
    const themeLink: HTMLLinkElement = <HTMLLinkElement>document.getElementById('theme-css');
    themeLink.href = 'assets/components/themes/' + theme + '/theme.css';
    event.preventDefault();
  }

  onMenuButtonClick(event: Event) {
    this.menuActive = !this.menuActive;
    event.preventDefault();
  }
}
