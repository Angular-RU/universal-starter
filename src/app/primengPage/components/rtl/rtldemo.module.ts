import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RTLDemo } from './rtldemo';
import { RTLDemoRoutingModule } from './rtldemo-routing.module';
import { DialogModule } from 'primeng/components/dialog/dialog';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { AccordionModule } from 'primeng/components/accordion/accordion';
import { TabViewModule } from 'primeng/components/tabview/tabview';
import { CodeHighlighterModule } from 'primeng/components/codehighlighter/codehighlighter';

@NgModule({
    imports: [
        CommonModule,
        RTLDemoRoutingModule,
        FormsModule,
        DialogModule,
        ButtonModule,
        InputTextModule,
        AccordionModule,
        TabViewModule,
        CodeHighlighterModule
    ],
    declarations: [
        RTLDemo
    ]
})
export class RTLDemoModule { }
