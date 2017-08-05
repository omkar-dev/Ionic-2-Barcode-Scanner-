import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BarcodeScanner,BarcodeScannerOptions} from '@ionic-native/barcode-scanner'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

options :BarcodeScannerOptions;
result: {};
  constructor(private barcode:BarcodeScanner,public navCtrl: NavController) {

  }

  async scanBarcode(){

    this.options = {

      prompt: 'Scan a barcode'
    }

this.result=await this.barcode.scan( this.options);
console.log(this.result);
  }

async encodeData(){


  await this.barcode.encode(this.barcode.Encode.TEXT_TYPE,'Omkar resting')
}



}


