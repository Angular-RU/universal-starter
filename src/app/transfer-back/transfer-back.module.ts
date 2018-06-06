import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransferBackRoutes } from './transfer-back.routing';
import { TransferBackComponent } from './transfer-back.component';

@NgModule({
  imports: [
    CommonModule,
    TransferBackRoutes,
  ],
  declarations: [TransferBackComponent]
})
export class TransferBackModule { }
