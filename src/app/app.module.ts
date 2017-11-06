import { AppRoutes } from './app.routing';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TransferHttpModule } from './../modules/transfer-http/transfer-http.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    HttpModule,
    RouterModule,
    AppRoutes,
    TransferHttpModule,
    BrowserAnimationsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
