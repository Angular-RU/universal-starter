import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionDemo } from './accordiondemo';
import { AccordionDemoRoutingModule } from './accordiondemo-routing.module';
import { AccordionModule } from 'primeng/components/accordion/accordion';
import { ButtonModule } from 'primeng/components/button/button';
import { TabViewModule } from 'primeng/components/tabview/tabview';
import { GrowlModule } from 'primeng/components/growl/growl';
import { CodeHighlighterModule } from 'primeng/components/codehighlighter/codehighlighter';

@NgModule({
  imports: [
    CommonModule,
    AccordionDemoRoutingModule,
    AccordionModule,
    ButtonModule,
    TabViewModule,
    GrowlModule,
    CodeHighlighterModule
  ],
  declarations: [
    AccordionDemo
  ]
})
export class AccordionDemoModule { }
