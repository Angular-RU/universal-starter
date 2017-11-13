import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}    from '@angular/forms';
import {CheckboxDemo} from './checkboxdemo';
import {CheckboxDemoRoutingModule} from './checkboxdemo-routing.module';
import {CheckboxModule} from 'primeng/components/checkbox/checkbox';
import {TabViewModule} from 'primeng/components/tabview/tabview';
import {CodeHighlighterModule} from 'primeng/components/codehighlighter/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
        FormsModule,
		CheckboxDemoRoutingModule,
        CheckboxModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		CheckboxDemo
	]
})
export class CheckboxDemoModule {}
