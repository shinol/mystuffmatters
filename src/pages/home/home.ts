import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { BarcodeScanner } from 'ionic-native';

import { QRCodePage } from '../qrcode/qrcode';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  bData = {
    cancelled: 0,
    text: "loading...",
    format: "loading..."
  };

  constructor(public navCtrl: NavController) {
    
  }

  scanIt() {
    console.log("scaning...................");
    BarcodeScanner.scan().then((barcodeData) => {
      console.log(barcodeData);
      this.bData = barcodeData;
    }, (err) => {
      console.log(err);
    })
  }

  encodeIt() {
    this.navCtrl.push(QRCodePage);
  }

}
