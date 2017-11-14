import { TransferHttp } from './../../../modules/transfer-http/transfer-http';
import 'rxjs/add/operator/toPromise';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Car } from '../domain/car';

@Injectable()
export class CarService {

  constructor(private http: TransferHttp) { }

  async getCarsSmallAsync() {
    const result = await this.http.get('http://localhost:4000/assets/showcase/data/cars-small.json')
      .toPromise();
    return result.data;
  }

  async getCarsMediumAsync() {
    const result = await this.http.get('http://localhost:4000/assets/showcase/data/cars-medium.json')
      .toPromise();
    return result.data;
  }

  async getCarsLargeAsync() {
    const result = await this.http.get('http://localhost:4000/assets/showcase/data/cars-large.json')
      .toPromise();
    return result.data;
  }
}
