import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';

/*
  Generated class for the LoaderServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoaderServiceProvider {

  private spinnerType: string;
  private spinnerDuration: number;
  private loadingContent: string;
  private loader;

  constructor(public loadingCtrl: LoadingController) {
    this.spinnerDuration = 3000;
    this.loadingContent = 'Loading..please wait';
    this.spinnerType = 'bubbles';
  }

  show(spinnerContent?: string){

    if(spinnerContent){
      this.loadingContent = spinnerContent;
    }

    this.loader = this.loadingCtrl.create({
      spinner: this.spinnerType,
      content: this.loadingContent,
      //duration: this.spinnerDuration = 3000
    });

    this.loader.present();
  
  }

  hide(){
    if(this.loader)
      this.loader.dismiss();
  }

}
