import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {DataScrollerDemo} from './datascrollerdemo';
import {DataScrollerSubMenu} from './datascrollersubmenu';
import {DataScrollerInfiniteDemo} from './datascrollerinfinitedemo';
import {DataScrollerInlineDemo} from './datascrollerinlinedemo';
import {DataScrollerLoaderDemo} from './datascrollerloaderdemo';
import {DatascrollerDemoRoutingModule} from './datascrollerdemo-routing.module';
import {DataScrollerModule} from 'primeng/components/datascroller/datascroller';
import {DialogModule} from 'primeng/components/dialog/dialog';
import {ButtonModule} from 'primeng/components/button/button';
import {GrowlModule} from 'primeng/components/growl/growl';
import {TabViewModule} from 'primeng/components/tabview/tabview';
import {CodeHighlighterModule} from 'primeng/components/codehighlighter/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
		DatascrollerDemoRoutingModule,
        DataScrollerModule,
        DialogModule,
        ButtonModule,
        GrowlModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		DataScrollerDemo,
        DataScrollerInfiniteDemo,
        DataScrollerInlineDemo,
        DataScrollerLoaderDemo,
        DataScrollerSubMenu
	]
})
export class DataScrollerDemoModule {}
