import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AngularFireAuthModule} from "@angular/fire/auth";
import {AngularFireMessagingModule} from "@angular/fire/messaging";
import {environment} from "../environment";
import {AngularFireModule} from "@angular/fire";
import {MessagingService} from "./message.service";
import {AsyncPipe} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireMessagingModule,
    HttpClientModule
  ],
  providers: [MessagingService, AsyncPipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
