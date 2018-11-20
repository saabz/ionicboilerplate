import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {Idle, DEFAULT_INTERRUPTSOURCES} from '@ng-idle/core';
import {Keepalive} from '@ng-idle/keepalive';

import { TabsPage } from '../app/common/pages/tabs/tabs';
import { TimeoutPage } from '../pages/timeout/timeout';

import { ToastServiceProvider } from '../app/common/providers/toast-service/toast-service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('myNav') navCtrl: NavController;
  rootPage:any = TabsPage;

// sudo npm install --save @ng-idle/core@2.0.0-beta.15 @ng-idle/keepalive@2.0.0-beta.15 @angular2-moment

idleState = 'Not started.';
timedOut = false;
lastPing?: Date = null;

  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen, 
              private idle: Idle, 
              private keepalive: Keepalive,
              //public navCtrl: NavController, 
              public toastService: ToastServiceProvider) {

    // sets an idle timeout of 5 seconds, for testing purposes.
    idle.setIdle(5);
    // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
    idle.setTimeout(5);
    // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    idle.onIdleEnd.subscribe(() => this.idleState = 'No longer idle.');
    idle.onTimeout.subscribe(() => {
      this.idleState = 'Timed out!';
      this.timedOut = true;
      this.navCtrl.push(TimeoutPage);
      this.toastService.show('You have been logged out due to inactivity');
    });

    idle.onIdleStart.subscribe(() => this.idleState = 'You\'ve gone idle!');
    idle.onTimeoutWarning.subscribe((countdown) => this.idleState = 'You will time out in ' + countdown + ' seconds!');

    // sets the ping interval to 15 seconds
    keepalive.interval(15);

    keepalive.onPing.subscribe(() => this.lastPing = new Date());

    this.reset();

    platform.ready().then(() => {


      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  reset() {
    this.idle.watch();
    this.idleState = 'Started.';
    this.timedOut = false;
  }


  
}
