import { Injectable } from '@angular/core';
import { appConfig } from '../../config/constants';

/*
  Generated class for the ConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConfigProvider {

  constructor() {
    console.log('Hello ConfigProvider Provider');
  }

  getConfigVal(key:string){
    if( key in appConfig){
      return appConfig[key];
    }else{
      return '';
    }
  }

}
