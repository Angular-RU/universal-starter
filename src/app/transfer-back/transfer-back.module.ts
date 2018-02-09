import { TransferBackRoutes } from './transfer-back.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferBackComponent } from './transfer-back.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TransferBackRoutes,
    TranslateModule
  ],
  declarations: [TransferBackComponent]
})
export class TransferBackModule { }
