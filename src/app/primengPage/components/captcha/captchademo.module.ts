import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {CaptchaDemo} from './captchademo';
import {CaptchaDemoRoutingModule} from './captchademo-routing.module';
import {CaptchaModule} from 'primeng/components/captcha/captcha';
import {GrowlModule} from 'primeng/components/growl/growl';
import {TabViewModule} from 'primeng/components/tabview/tabview';
import {CodeHighlighterModule} from 'primeng/components/codehighlighter/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
		CaptchaDemoRoutingModule,
        CaptchaModule,
        TabViewModule,
        GrowlModule,
        CodeHighlighterModule
	],
	declarations: [
		CaptchaDemo
	]
})
export class CaptchaDemoModule {}
