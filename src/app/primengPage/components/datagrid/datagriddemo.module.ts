import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {DataGridDemo} from './datagriddemo';
import {DataGridDemoRoutingModule} from './datagriddemo-routing.module';
import {DataGridModule} from 'primeng/components/datagrid/datagrid';
import {PanelModule} from 'primeng/components/panel/panel';
import {DialogModule} from 'primeng/components/dialog/dialog';
import {TabViewModule} from 'primeng/components/tabview/tabview';
import {CodeHighlighterModule} from 'primeng/components/codehighlighter/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
		DataGridDemoRoutingModule,
        DataGridModule,
        PanelModule,
        DialogModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		DataGridDemo
	]
})
export class DataGridDemoModule {}
