import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { TransferBackRoutes } from './transfer-back.routing';
import { TransferBackComponent } from './transfer-back.component';

@NgModule({
  imports: [CommonModule, TransferBackRoutes, TranslateModule],
  declarations: [TransferBackComponent],
})
export class TransferBackModule {}
