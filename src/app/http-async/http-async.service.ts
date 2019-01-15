import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpAsyncService {
  constructor(private httpClient: HttpClient) {}

  async get(url: string): Promise<any> {
    return await this.httpClient.get(url).toPromise();
  }
}
