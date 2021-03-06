import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../app/common/pages/tabs/tabs';
import { LoginPage } from '../app/auth/pages/login/login';
// import { TimeoutPage } from '../pages/timeout/timeout';

// providers
import { IdleTimerProvider } from './common/providers/idle-timer/idle-timer';
import { AuthProvider } from './auth/providers/auth/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // @ViewChild('myNav') navCtrl: NavController;
  rootPage:any = TabsPage;

  // sudo npm install --save @ng-idle/core@2.0.0-beta.15 @ng-idle/keepalive@2.0.0-beta.15 @angular2-moment

  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen,
              private idleTimer:IdleTimerProvider,
              private authService:AuthProvider              
             ) {

    this.initializeApp();
    platform.ready().then(() => {

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    
  }

  initializeApp(){
    if( !this.authService.isAuthenticated() ){
      //
      this.rootPage = LoginPage;
    }else{
      this.rootPage = TabsPage;
    }
    this.idleTimer.monitorIdle();
  }


  
}
