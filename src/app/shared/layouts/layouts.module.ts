import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TranslatesModule } from '@shared/translates/translates.module';

import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { WrapperComponent } from './wrapper/wrapper.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslatesModule
  ],
  declarations: [
    FooterComponent,
    SidebarComponent,
    ToolbarComponent,
    WrapperComponent
  ]
})
export class LayoutsModule {
}
