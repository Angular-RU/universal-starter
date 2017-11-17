import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-ionic',
  templateUrl: './home-ionic.component.html',
  styleUrls: ['./home-ionic.component.variables.scss']
})
export class HomeIonicComponent implements OnInit {
  message = 'Hello world';
  constructor() { }

  ngOnInit() {
  }

}
