import { Component } from '@angular/core';

const T_ME: any[] = [
  {
    link: 'https://t.me/angular_ru',
    src:
    // tslint:disable-next-line:max-line-length
      'https://camo.githubusercontent.com/cf47bb838e2e27d8bcb46de3a7abb1a74556bb0c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f54656c656772616d5f636861743a2d416e67756c61725f52552d3231366263312e7376673f7374796c653d666c6174',
    alt: 'Angular-RU',
  },
  {
    link: 'https://t.me/angular_universal_ru',
    src:
    // tslint:disable-next-line:max-line-length
      'https://camo.githubusercontent.com/acd09569925bcdadffb848e234e1e4dbb07a6ad9/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f54656c656772616d5f636861743a2d416e67756c61725f52555f556e6976657273616c2d3134623130322e7376673f7374796c653d666c6174',
    alt: 'Angular-RU Universal',
  },
];

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  public tMe: any[] = T_ME;
}
