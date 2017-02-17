import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { BarcodeScanner, Camera, Flashlight } from 'ionic-native';

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
  boxId: string = '';
  imageURL: string = '';

  constructor(public navCtrl: NavController) {}

  scanIt() {
    BarcodeScanner.scan().then((barcodeData) => {
      this.bData = barcodeData;
    }, (err) => {
      console.log(err);
    })
  }

  encodeIt() {
    this.navCtrl.push(QRCodePage, {id: this.boxId});
  }

  takePhoto() {
    Camera.getPicture({
      encodingType: Camera.EncodingType.JPEG,
      correctOrientation: true
    })
      .then(
        imageData => {
          this.imageURL = imageData;
        }
      )
      .catch(
        err => {
          console.log(err);
        }
      );
  }

  lite() {
    Flashlight.available().then(isAvailable => Flashlight.toggle());
  }

}
