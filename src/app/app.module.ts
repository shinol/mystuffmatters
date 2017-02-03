import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { QRCodeModule } from 'angular2-qrcode';
import { QRCodePage } from '../pages/qrcode/qrcode';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    QRCodePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    QRCodeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    QRCodePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
