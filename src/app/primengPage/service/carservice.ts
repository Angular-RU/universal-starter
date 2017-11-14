import { TransferHttp } from './../../../modules/transfer-http/transfer-http';
import 'rxjs/add/operator/toPromise';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Car } from '../domain/car';

@Injectable()
export class CarService {

  constructor(private http: TransferHttp) { }

  async getCarsSmallAsync() {
    return await this.http.get('http://localhost:4000/assets/showcase/data/cars-small.json')
      .toPromise();
  }

  async getCarsMediumAsync() {
    return await this.http.get('http://localhost:4000/assets/showcase/data/cars-medium.json')
      .toPromise();
  }

  async getCarsLargeAsync() {
    return await this.http.get('http://localhost:4000/assets/showcase/data/cars-large.json')
      .toPromise();
  }
}
