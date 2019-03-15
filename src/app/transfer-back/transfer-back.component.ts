import { Component, OnInit, Inject } from '@angular/core';

import { TransferHttpService } from '@gorniv/ngx-universal';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-transfer-back',
  templateUrl: './transfer-back.component.html',
})
export class TransferBackComponent implements OnInit {
  public result: any;
  public resultHttpClient: any;
  public resultPost: any;

  constructor(
    private http: TransferHttpService,
    private httpClient: HttpClient,
    @Inject('ORIGIN_URL') public baseUrl: string,
  ) {
    console.log(`ORIGIN_URL=${baseUrl}`);
  }

  ngOnInit(): void {
    this.http.get('https://reqres.in/api/users?delay=3').subscribe((result) => {
      this.result = result;
    });
    this.httpClient.get('https://reqres.in/api/users?delay=3').subscribe((result) => {
      this.resultHttpClient = result;
    });
    this.http
      .post(
        'https://reqres.in/api/users',
        JSON.stringify({
          name: 'morpheus',
          job: 'leader',
        }),
      )
      .subscribe((result) => {
        this.resultPost = result;
      });
  }
}
