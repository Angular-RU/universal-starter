import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {LightboxDemo} from './lightboxdemo';
import {LightboxDemoRoutingModule} from './lightboxdemo-routing.module';
import {LightboxModule} from 'primeng/components/lightbox/lightbox';
import {TabViewModule} from 'primeng/components/tabview/tabview';
import {CodeHighlighterModule} from 'primeng/components/codehighlighter/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
		LightboxDemoRoutingModule,
        LightboxModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		LightboxDemo
	]
})
export class LightboxDemoModule {}
