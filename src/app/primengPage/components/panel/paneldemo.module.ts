import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {PanelDemo} from './paneldemo';
import {PanelDemoRoutingModule} from './paneldemo-routing.module';
import {PanelModule} from 'primeng/components/panel/panel';
import {GrowlModule} from 'primeng/components/growl/growl';
import {SplitButtonModule} from 'primeng/components/splitbutton/splitbutton';
import {TabViewModule} from 'primeng/components/tabview/tabview';
import {CodeHighlighterModule} from 'primeng/components/codehighlighter/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
		PanelDemoRoutingModule,
        PanelModule,
        GrowlModule,
        SplitButtonModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		PanelDemo
	]
})
export class PanelDemoModule {}
