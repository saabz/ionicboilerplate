import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VERSION } from '@angular/common';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    console.log(VERSION);
  }

}
