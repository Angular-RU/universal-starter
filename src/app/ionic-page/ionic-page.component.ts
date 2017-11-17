import { HomeIonicComponent } from './home-ionic/home-ionic.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ionic-page',
  templateUrl: './ionic-page.component.html',
  styleUrls: ['./ionic-page.component.scss']
})
export class IonicPageComponent implements OnInit {
  rootPage = HomeIonicComponent;
  constructor() { }

  ngOnInit() {
  }

}
