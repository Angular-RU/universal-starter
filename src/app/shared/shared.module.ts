import { ModuleWithProviders, NgModule } from '@angular/core';

import { LayoutsModule } from './layouts/layouts.module';
import { TranslatesModule } from './translates';

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
