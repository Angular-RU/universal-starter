import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {GrowlDemo} from './growldemo';
import {GrowlDemoRoutingModule} from './growldemo-routing.module';
import {GrowlModule} from 'primeng/components/growl/growl';
import {ButtonModule} from 'primeng/components/button/button';
import {TabViewModule} from 'primeng/components/tabview/tabview';
import {CodeHighlighterModule} from 'primeng/components/codehighlighter/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
		GrowlDemoRoutingModule,
        GrowlModule,
        ButtonModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		GrowlDemo
	]
})
export class GrowlDemoModule {}
