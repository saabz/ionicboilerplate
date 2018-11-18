import { Injectable } from '@angular/core';
import { ToastController, ToastOptions } from 'ionic-angular';
/*
  Generated class for the ToastServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ToastServiceProvider {

  toastOptions: ToastOptions;
  toastDuration: number;
  toastPosition: string;

  constructor(public toastCtrl: ToastController) {
    this.toastDuration = 10000; //this has to come from config
    this.toastPosition = 'middle'; // top | middle | bottom
  }

  /**
   * this methods shows toast
   */
  show(toastMessage, closeButtonText?: string){
    
    if(closeButtonText){
      this.toastOptions = {
        message: toastMessage,
        duration: this.toastDuration,
        showCloseButton:true,
        closeButtonText: closeButtonText,
        position:this.toastPosition
      }
    }else{
      this.toastOptions = {
        message: toastMessage,
        duration: this.toastDuration, 
        showCloseButton: false,
        position:this.toastPosition
      }
    }

    
    this.toastCtrl.create(this.toastOptions).present();

  }

}
