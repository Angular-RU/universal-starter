import { ModuleWithProviders, NgModule } from '@angular/core';

import { TransferHttpModule } from '@gorniv/ngx-transfer-http';

import { LayoutsModule } from './layouts/layouts.module';
import { SharedMetaModule } from './shared-meta';

@NgModule({
  exports: [LayoutsModule, SharedMetaModule, TransferHttpModule],
  providers: [],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: SharedModule };
  }
}
