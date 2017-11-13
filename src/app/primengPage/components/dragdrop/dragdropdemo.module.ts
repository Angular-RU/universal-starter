import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {DragDropDemo} from './dragdropdemo';
import {DragDropDemoRoutingModule} from './dragdropdemo-routing.module';
import {DragDropModule} from 'primeng/components/dragdrop/dragdrop';
import {PanelModule} from 'primeng/components/panel/panel';
import {DataTableModule} from 'primeng/components/datatable/datatable';
import {TabViewModule} from 'primeng/components/tabview/tabview';
import {CodeHighlighterModule} from 'primeng/components/codehighlighter/codehighlighter';


@NgModule({
	imports: [
		CommonModule,
		DragDropDemoRoutingModule,
        DragDropModule,
        PanelModule,
        DataTableModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		DragDropDemo
	]
})
export class DragDropDemoModule {}
