import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}    from '@angular/forms';
import {TreeTableDemo} from './treetabledemo';
import {TreeTableDemoRoutingModule} from './treetabledemo-routing.module';
import {TreeTableModule} from 'primeng/components/treetable/treetable';
import {GrowlModule} from 'primeng/components/growl/growl';
import {TabViewModule} from 'primeng/components/tabview/tabview';
import {ContextMenuModule} from 'primeng/components/contextmenu/contextmenu';
import {CodeHighlighterModule} from 'primeng/components/codehighlighter/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
        FormsModule,
		TreeTableDemoRoutingModule,
        TreeTableModule,
        GrowlModule,
        TabViewModule,
        ContextMenuModule,
        CodeHighlighterModule
	],
	declarations: [
		TreeTableDemo
	]
})
export class TreeTableDemoModule {}
