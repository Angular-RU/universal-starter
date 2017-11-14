import { TransferHttp } from './../../../modules/transfer-http/transfer-http';
import 'rxjs/add/operator/toPromise';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EventService {

  constructor(private http: TransferHttp) { }

  async getEvents() {
    return await this.http.get('assets/showcase/data/scheduleevents.json')
      .toPromise();
  }
}
