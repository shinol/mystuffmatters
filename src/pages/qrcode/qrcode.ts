import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { Screenshot, SocialSharing } from 'ionic-native';

@Component ({
    selector: 'page-qrcode',
    templateUrl: 'qrcode.html'
})
export class QRCodePage {
    boxID: string;

    constructor(
            private navCtrl: NavController, 
            private navParms: NavParams,
            private platform: Platform) {
        this.boxID = navParms.get('id');
    }

    shareIt() {
        this.platform.ready().then(() => {
            Screenshot.URI(80)
                .then((res) => {
                    console.log(res);
                    SocialSharing.share(null, res.URI, null)
                    .then(() => {},
                        () => {
                        alert('SocialSharing failed');
                        });
                },
                (err) => {
                    alert(err);

                });
        });
    }


}