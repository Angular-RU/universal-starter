import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockUIDemo } from './blockuidemo';
import { BlockUIDemoRoutingModule } from './blockuidemo-routing.module';
import { BlockUIModule } from 'primeng/components/blockui/blockui';
import { ButtonModule } from 'primeng/components/button/button';
import { PanelModule } from 'primeng/components/panel/panel';
import { TabViewModule } from 'primeng/components/tabview/tabview';
import { CodeHighlighterModule } from 'primeng/components/codehighlighter/codehighlighter';

@NgModule({
    imports: [
        CommonModule,
        BlockUIDemoRoutingModule,
        BlockUIModule,
        ButtonModule,
        PanelModule,
        TabViewModule,
        CodeHighlighterModule
    ],
    declarations: [
        BlockUIDemo
    ]
})
export class BlockUIDemoModule { }
