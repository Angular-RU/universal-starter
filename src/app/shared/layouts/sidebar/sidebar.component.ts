import { Component, OnInit } from '@angular/core';

const LINKS: any[] = [
  { link: '/home', name: 'home', icon: 'home' },
  { link: '/mock', name: 'mock', icon: 'accessibility' },
  { link: '/back', name: 'back-http', icon: 'accessibility' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  public links: any[];

  ngOnInit() {
    this.links = LINKS.map(link => {
      link.name = `sidebar.${link.name}`;
      return link;
    });
  }
}
