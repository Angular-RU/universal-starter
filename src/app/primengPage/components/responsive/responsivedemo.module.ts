import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}    from '@angular/forms';
import {ResponsiveDemo} from './responsivedemo';
import {ResponsiveDemoRoutingModule} from './responsivedemo-routing.module';
import {InputTextModule} from 'primeng/components/inputtext/inputtext';
import {InputTextareaModule} from 'primeng/components/inputtextarea/inputtextarea';
import {CalendarModule} from 'primeng/components/calendar/calendar';
import {AutoCompleteModule} from 'primeng/components/autocomplete/autocomplete';
import {ButtonModule} from 'primeng/components/button/button';
import {SplitButtonModule} from 'primeng/components/splitbutton/splitbutton';
import {DropdownModule} from 'primeng/components/dropdown/dropdown';
import {PasswordModule} from 'primeng/components/password/password';
import {ListboxModule} from 'primeng/components/listbox/listbox';
import {RadioButtonModule} from 'primeng/components/radiobutton/radiobutton';
import {DialogModule} from 'primeng/components/dialog/dialog';
import {PanelModule} from 'primeng/components/panel/panel';
import {DataTableModule} from 'primeng/components/datatable/datatable';
import {DataGridModule} from 'primeng/components/datagrid/datagrid';
import {CarouselModule} from 'primeng/components/carousel/carousel';
import {OrderListModule} from 'primeng/components/orderlist/orderlist';
import {PickListModule} from 'primeng/components/picklist/picklist';
import {MenuModule} from 'primeng/components/menu/menu';
import {PanelMenuModule} from 'primeng/components/panelmenu/panelmenu';
import {TabViewModule} from 'primeng/components/tabview/tabview';
import {TreeModule} from 'primeng/components/tree/tree';
import {CodeHighlighterModule} from 'primeng/components/codehighlighter/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
        FormsModule,
		ResponsiveDemoRoutingModule,
        InputTextModule,
        InputTextareaModule,
        CalendarModule,
        AutoCompleteModule,
        SplitButtonModule,
        PasswordModule,
        DropdownModule,
        ListboxModule,
        RadioButtonModule,
        DialogModule,
        PanelModule,
        DataTableModule,
        DataGridModule,
        CarouselModule,
        OrderListModule,
        PickListModule,
        MenuModule,
        PanelMenuModule,
        TreeModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		ResponsiveDemo
	]
})
export class ResponsiveDemoModule {}
