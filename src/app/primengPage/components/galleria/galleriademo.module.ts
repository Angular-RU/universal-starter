import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {GalleriaDemo} from './galleriademo';
import {GalleriaDemoRoutingModule} from './galleriademo-routing.module';
import {GalleriaModule} from 'primeng/components/galleria/galleria';
import {TabViewModule} from 'primeng/components/tabview/tabview';
import {CodeHighlighterModule} from 'primeng/components/codehighlighter/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
		GalleriaDemoRoutingModule,
        GalleriaModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		GalleriaDemo
	]
})
export class GalleriaDemoModule {}
