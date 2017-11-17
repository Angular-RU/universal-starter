import { HomeIonicComponent } from './home-ionic/home-ionic.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicPageComponent } from './ionic-page.component';
import { IonicPageRoutes } from './ionic-page.routing';
import { IonicApp, IonicModule } from 'ionic-angular';

@NgModule({
  imports: [
    CommonModule,
    IonicPageRoutes,
    IonicModule.forRoot(IonicPageComponent)
  ],
  declarations: [IonicPageComponent, HomeIonicComponent],
  entryComponents: [HomeIonicComponent]
})
export class IonicPageModule { }