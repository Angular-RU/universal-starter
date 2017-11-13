import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToolbarDemo} from './toolbardemo';
import {ToolbarDemoRoutingModule} from './toolbardemo-routing.module';
import {ToolbarModule} from 'primeng/components/toolbar/toolbar';
import {ButtonModule} from 'primeng/components/button/button';
import {SplitButtonModule} from 'primeng/components/splitbutton/splitbutton';
import {TabViewModule} from 'primeng/components/tabview/tabview';
import {CodeHighlighterModule} from 'primeng/components/codehighlighter/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
		ToolbarDemoRoutingModule,
        ToolbarModule,
        ButtonModule,
        SplitButtonModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		ToolbarDemo
	]
})
export class ToolbarDemoModule {}
