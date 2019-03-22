import { Component, OnInit } from '@angular/core';

interface IControl {
  type: 'button' |
    'checkbox' |
    'color' |
    'date' |
    'datetime-local' |
    'email' |
    'file' |
    'hidden' |
    'image' |
    'month' |
    'number' |
    'password' |
    'radio' |
    'range' |
    'reset' |
    'search' |
    'submit' |
    'tel' |
    'text' |
    'time' |
    'url' |
    'week';
  label: string;
  id: string;
  name: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  controls: IControl[] = [
    {
      type: 'email',
      id: 'loginEmail',
      label: 'enter-your-email',
      name: 'name'
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }
}
