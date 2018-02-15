import { ModuleWithProviders, NgModule } from '@angular/core';

import { LayoutsModule } from './layouts/layouts.module';

@NgModule({
  exports: [
    LayoutsModule,
  ],
  providers: []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: SharedModule };
  }
}
