import { ModuleWithProviders, NgModule } from '@angular/core';

import { LayoutsModule } from './layouts/layouts.module';
import { TranslateModule } from './translate/translate.module';

@NgModule({
  exports: [
    LayoutsModule,
    TranslateModule
  ],
  providers: []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: SharedModule };
  }
}
