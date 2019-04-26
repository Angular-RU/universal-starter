import { Component } from '@angular/core';

interface IRoute {
  link: string[];
  title: string;
  text: string;
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  routes: IRoute[] = [
    {
      link: ['/auth', 'login'],
      text: 'Login page',
      title: ''
    },
    {
      link: ['/auth', 'registration'],
      text: 'Registration page',
      title: ''
    }
  ];
  constructor() {}
}
