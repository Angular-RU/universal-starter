import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {DataListDemo} from './datalistdemo';
import {DataListDemoRoutingModule} from './datalistdemo-routing.module';
import {DataListModule} from 'primeng/components/datalist/datalist';
import {DialogModule} from 'primeng/components/dialog/dialog';
import {TabViewModule} from 'primeng/components/tabview/tabview';
import {CodeHighlighterModule} from 'primeng/components/codehighlighter/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
		DataListDemoRoutingModule,
        DataListModule,
        DialogModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		DataListDemo
	]
})
export class DataListDemoModule {}
