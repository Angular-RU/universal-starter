import { TransferHttp } from './../../../modules/transfer-http/transfer-http';
import 'rxjs/add/operator/toPromise';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { TreeNode } from 'primeng/components/common/api';

@Injectable()
export class NodeService {

  constructor(private http: TransferHttp) { }

  async getFilesAsync() {
    const result = await this.http.get('assets/showcase/data/files.json')
      .toPromise();
    return result.data;
  }

  async getLazyFilesAsync() {
    const result = await this.http.get('assets/showcase/data/files-lazy.json')
      .toPromise();
    return result.data;
  }

  async getFilesystemAsync() {
    const result = await this.http.get('assets/showcase/data/filesystem.json')
      .toPromise();
    return result.data;
  }

  async getLazyFilesystemAsync() {
    const result = await this.http.get('assets/showcase/data/filesystem-lazy.json')
      .toPromise();
    return result.data;
  }
}
