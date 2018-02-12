import { ModuleWithProviders, NgModule } from '@angular/core';

import { LayoutsModule } from './layouts/layouts.module';
import { TranslatesModule } from './translates/translates.module';

@NgModule({
  exports: [
    LayoutsModule,
    TranslatesModule
  ],
  providers: []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: SharedModule };
  }
}
