import { TransferHttp } from './../../../modules/transfer-http/transfer-http';
import 'rxjs/add/operator/toPromise';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CountryService {

    constructor(private http: TransferHttp) { }

    async getCountriesAsync() {
    return await this.http.get('assets/showcase/data/countries.json')
      .toPromise();
    }
}
