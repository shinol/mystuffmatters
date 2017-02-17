import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { QRCodePage } from '../qrcode/qrcode';


@Component({
    selector: 'selector',
    template: `
        <ion-tabs>
            <ion-tab [root]="homePage" tabTitle="New Item" tabIcon="star"></ion-tab>
            <ion-tab [root]="qrCodePage" tabTitle="Items" tabIcon="book"></ion-tab>
        </ion-tabs>
        `,
    styles: ['']
})
export class TabsPage {
    homePage: any = HomePage;
    qrCodePage: any = QRCodePage;
}