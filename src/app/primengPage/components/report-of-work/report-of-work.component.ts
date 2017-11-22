import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-of-work',
  templateUrl: './report-of-work.component.html',
  styleUrls: ['./report-of-work.component.scss']
})
export class ReportOfWorkComponent implements OnInit {
  reports: Array<any>;
  constructor() {
    this.reports = [];
    this.reports.push({ link: '/setup', desc: 'ok' });
    this.reports.push({ link: '/theming', desc: 'ok' });
    this.reports.push({ link: '/accorsdion', desc: 'ok' });
    this.reports.push({ link: '/autocomplete', desc: 'ok' });
    this.reports.push({ link: '/blockui', desc: 'ok' });
    this.reports.push({ link: '/breadcrumb', desc: 'ok' });
    this.reports.push({ link: '/button', desc: 'ok' });
    this.reports.push({ link: '/calendar', desc: 'ok' });
    this.reports.push({ link: '/captcha', desc: 'ok' });
    this.reports.push({ link: '/carousel', desc: 'no' });
    this.reports.push({ link: '/chart', desc: 'ok' });
    this.reports.push({ link: '/checkbox', desc: 'ok' });
    this.reports.push({ link: '/chips', desc: 'ok' });
    this.reports.push({ link: '/codehighlighter', desc: 'ok если использовать global[\'Prism\'] = null;' });
    this.reports.push({ link: '/colorpicker', desc: 'ok' });
    this.reports.push({ link: '/confirmdialog', desc: 'ok' });
    // tslint:disable-next-line:max-line-length
    this.reports.push({ link: '/contextmenu', desc: 'work', error: 'No provider for ContextMenu' });
    this.reports.push({ link: '/datagrid', desc: 'ok' });
    this.reports.push({ link: '/datalist', desc: 'ok' });
    this.reports.push({ link: '/datascroller', desc: 'ok' });
    // tslint:disable-next-line:max-line-length
    this.reports.push({ link: '/datatable', desc: 'work', error: 'No provider for DataTable!' });
    this.reports.push({ link: '/defer', desc: 'work', error: 'this.el.nativeElement.getBoundingClientRect is not a function' });
    this.reports.push({ link: '/dialog', desc: 'ok' });
    // tslint:disable-next-line:max-line-length
    this.reports.push({ link: '/dragdrop', desc: 'work', error: 'No provider for DataTable!' });
    this.reports.push({ link: '/dropdown', desc: 'ok' });
    this.reports.push({ link: '/editor', desc: 'bad', error: 'Quill is not defined' });
    this.reports.push({ link: '/fieldset', desc: 'ok' });
    this.reports.push({ link: '/fileupload', desc: 'ok' });
    this.reports.push({ link: '/galleria', desc: 'work', error: 'getComputedStyle is not defined' });
    this.reports.push({ link: '/grid', desc: 'ok' });
    this.reports.push({ link: '/growl', desc: 'ok' });
    // tslint:disable-next-line:max-line-length
    this.reports.push({ link: '/inplace', desc: 'work', error: 'No provider for DataTable' });
    this.reports.push({ link: '/inputmask', desc: 'ok' });
    this.reports.push({ link: '/inputswitch', desc: 'ok' });
    this.reports.push({ link: '/inputtext', desc: 'ok' });
    this.reports.push({ link: '/inputgroup', desc: 'ok' });
    this.reports.push({ link: '/inputtextarea', desc: 'ok' });
    this.reports.push({ link: '/lightbox', desc: 'ok' });
    this.reports.push({ link: '/listbox', desc: 'ok' });
    this.reports.push({ link: '/megamenu', desc: 'ok' });
    // tslint:disable-next-line:max-line-length
    this.reports.push({ link: '/menu', desc: 'work', error: ' No provider for Menu!' });
    this.reports.push({ link: '/menubar', desc: 'ok' });
    this.reports.push({ link: '/menumodel', desc: 'ok' });
    this.reports.push({ link: '/messages', desc: 'ok' });
    this.reports.push({ link: '/multiselect', desc: 'ok' });
    this.reports.push({ link: '/orderlist', desc: 'ok' });
    this.reports.push({ link: '/organizationchart', desc: 'work', error: 'No provider for OrganizationChart!' });
    this.reports.push({ link: '/overlaypanel', desc: 'work', error: ' No provider for DataTable!' });
    this.reports.push({ link: '/paginator', desc: 'work', error: 'getComputedStyle is not defined' });
    this.reports.push({ link: '/panel', desc: 'ok' });
    this.reports.push({ link: '/panelmenu', desc: 'ok' });
    this.reports.push({ link: '/password', desc: 'ok' });
    this.reports.push({ link: '/picklist', desc: 'ok' });
    this.reports.push({ link: '/progressbar', desc: 'ok' });
    this.reports.push({ link: '/progressspinner', desc: 'ok' });
    this.reports.push({ link: '/radiobutton', desc: 'ok', error: '' });
    this.reports.push({ link: '/rating', desc: 'ok', error: '' });
    this.reports.push({ link: '/responsive', desc: 'TypeError', error: 'Cannot read property \'removeChild\' of undefined' });
    this.reports.push({ link: '/rtl', desc: 'ok' });
    this.reports.push({ link: '/schedule', desc: 'TypeError', error: 'jQuery is not defined' });
    this.reports.push({ link: '/selectbutton', desc: 'ok' });
    this.reports.push({ link: '/sidebar', desc: 'ok' });
    this.reports.push({ link: '/slidemenu', desc: 'work', error: 'No provider for SlideMenu!' });
    this.reports.push({ link: '/slider', desc: 'ok', error: '' });
    this.reports.push({ link: '/spinner', desc: 'ok', error: '' });
    this.reports.push({ link: '/splitbutton', desc: 'ok' });
    this.reports.push({ link: '/steps', desc: 'ok', error: '' });
    this.reports.push({ link: '/support', desc: 'ok', error: '' });
    this.reports.push({ link: '/tabmenu', desc: 'ok', error: '' });
    this.reports.push({ link: '/tabview', desc: 'ok', error: '' });
    this.reports.push({ link: '/terminal', desc: 'ok', error: '' });
    this.reports.push({ link: '/tieredmenu', desc: 'ok' });
    this.reports.push({ link: '/togglebutton', desc: 'ok', error: '' });
    this.reports.push({ link: '/toolbar', desc: 'ok' });
    this.reports.push({ link: '/tooltip', desc: 'Event error build', error: 'Event is not defined' });
    this.reports.push({ link: '/tree', desc: 'work', error: 'No provider for ContextMenu' });
    this.reports.push({ link: '/treetable', desc: 'work', error: ' No provider for ContextMenu' });
    this.reports.push({ link: '/tristatecheckbox', desc: 'ok', error: '' });
    this.reports.push({ link: '/validation', desc: 'ok' });
  }

  ngOnInit() {
  }

}
