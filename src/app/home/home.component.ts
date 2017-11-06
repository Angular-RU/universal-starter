import { AppStorage } from './../../forStorage/universal.inject';
import { TransferHttp } from './../../modules/transfer-http/transfer-http';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  result: any;

  constructor(private http: TransferHttp, @Inject(AppStorage) private appStorage: Storage) { }

  ngOnInit(): void {
    this.http.get('https://reqres.in/api/users?delay=3').subscribe(result => {
      this.result = result;
    });
    this.appStorage.setItem('test', 'test2');
    const resultCookie = this.appStorage.getItem('test');
    const t = window;
    const t1 = document;
  }
}
