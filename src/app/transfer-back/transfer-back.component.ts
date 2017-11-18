import { AppStorage } from './../../forStorage/universal.inject';
import { TransferHttp } from './../../modules/transfer-http/transfer-http';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-transfer-back',
  templateUrl: './transfer-back.component.html',
  styleUrls: ['./transfer-back.component.scss']
})
export class TransferBackComponent implements OnInit {
  result: any;

  constructor(private http: TransferHttp, @Inject(AppStorage) private appStorage: Storage) { }

  ngOnInit() {
    this.http.get('https://reqres.in/api/users?delay=3').subscribe(result => {
      this.result = result;
    });
  }

}
