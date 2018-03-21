import { Component, OnInit } from '@angular/core';

const LINKS: any[] = [
  { link: '/home', name: 'home', icon: 'home' },
  { link: '/mock', name: 'mock', icon: 'info_outline' },
  { link: '/back', name: 'back-http', icon: 'swap_vert' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  public links: any[] = [];

  ngOnInit(): void {
    const linkTemp = JSON.parse(JSON.stringify(LINKS));
    this.links = linkTemp.map(link => {
      link.name = `sidebar.${link.name}`;
      return link;
    });
  }
}
