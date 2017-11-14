import { TransferHttp } from './../../../modules/transfer-http/transfer-http';
import 'rxjs/add/operator/toPromise';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { TreeNode } from 'primeng/components/common/api';

@Injectable()
export class NodeService {

  constructor(private http: TransferHttp) { }

  async getFilesAsync() {
    return await this.http.get('assets/showcase/data/files.json')
      .toPromise();
  }

  async getLazyFilesAsync() {
    return await this.http.get('assets/showcase/data/files-lazy.json')
      .toPromise();
  }

  async getFilesystemAsync() {
    return await this.http.get('assets/showcase/data/filesystem.json')
      .toPromise();
  }

  async getLazyFilesystemAsync() {
    return await this.http.get('assets/showcase/data/filesystem-lazy.json')
      .toPromise();
  }
}
