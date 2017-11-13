import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrganizationChartDemo} from './organizationchartdemo';
import {OrganizationChartDemoRoutingModule} from './organizationchartdemo-routing.module';
import {OrganizationChartModule} from 'primeng/components/organizationchart/organizationchart';
import {GrowlModule} from 'primeng/components/growl/growl';
import {PanelModule} from 'primeng/components/panel/panel';
import {TabViewModule} from 'primeng/components/tabview/tabview';
import {CodeHighlighterModule} from 'primeng/components/codehighlighter/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
		OrganizationChartDemoRoutingModule,
        OrganizationChartModule,
        GrowlModule,
        PanelModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		OrganizationChartDemo
	]
})
export class OrganizationChartDemoModule {}
