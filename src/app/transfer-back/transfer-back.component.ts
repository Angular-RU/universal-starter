import { Component, OnInit, Inject } from '@angular/core';

import { AppStorage } from '@shared/for-storage/universal.inject';
import { TransferHttpService } from '@gorniv/ngx-transfer-http';
import { Store, Select } from '@ngxs/store';
import { DelayBack, AppState } from '../app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-transfer-back',
  templateUrl: './transfer-back.component.html'
})
export class TransferBackComponent implements OnInit {

  @Select(AppState.resultGet) resultGet$: Observable<any>;

  constructor(
    private http: TransferHttpService,
    private store: Store,
    @Inject(AppStorage) private appStorage: Storage,
    @Inject('ORIGIN_URL') public baseUrl: string) {
    console.log(`ORIGIN_URL=${baseUrl}`);
  }

  ngOnInit(): void {
    this.store.dispatch(new DelayBack());
  }
}
