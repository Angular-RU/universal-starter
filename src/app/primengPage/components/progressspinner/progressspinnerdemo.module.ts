import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProgressSpinnerDemo} from './progressspinnerdemo';
import {ProgressSpinnerDemoRoutingModule} from './progressspinnerdemo-routing.module';
import {ProgressSpinnerModule} from 'primeng/components/progressspinner/progressspinner';
import {TabViewModule} from 'primeng/components/tabview/tabview';
import {CodeHighlighterModule} from 'primeng/components/codehighlighter/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
		ProgressSpinnerDemoRoutingModule,
        ProgressSpinnerModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		ProgressSpinnerDemo
	]
})
export class ProgressSpinnerDemoModule {}
