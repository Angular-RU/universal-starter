import { ModuleWithProviders, NgModule } from '@angular/core';

import { LayoutsModule } from './layouts/layouts.module';
import { SharedMetaModule } from './shared-meta';
import { TransferHttpModule } from './transfer-http';

@NgModule({
  exports: [
    LayoutsModule,
    SharedMetaModule,
    TransferHttpModule
  ],
  providers: []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: SharedModule };
  }
}
