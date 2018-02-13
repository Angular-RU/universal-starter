import { Component, OnInit, Inject } from '@angular/core';
import { AppStorage } from '../../forStorage/universal.inject';
import { TransferHttp } from '../../modules/transfer-http/transfer-http';

@Component({
  selector: 'app-transfer-back',
  templateUrl: './transfer-back.component.html',
  styleUrls: ['./transfer-back.component.scss']
})
export class TransferBackComponent implements OnInit {
  public result: any;
  public resultPost: any;

  constructor(private http: TransferHttp,
              @Inject(AppStorage) private appStorage: Storage,
              @Inject('ORIGIN_URL') public baseUrl: string) {
    console.log(`ORIGIN_URL=${baseUrl}`);
  }

  ngOnInit() {
    this.http.get('https://reqres.in/api/users?delay=3').subscribe(result => {
      this.result = result;
    });
    this.http.post('https://reqres.in/api/users', JSON.stringify({
      'name': 'morpheus',
      'job': 'leader'
    })).subscribe(result => {
      this.resultPost = result;
    });
  }
}
