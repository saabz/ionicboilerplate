import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {Idle, DEFAULT_INTERRUPTSOURCES} from '@ng-idle/core';
import {Keepalive} from '@ng-idle/keepalive';

// providers
import { ToastServiceProvider } from '../toast-service/toast-service';

/*
  Generated class for the IdleTimerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class IdleTimerProvider {

  idleState = 'Not started.';
  timedOut = false;
  lastPing?: Date = null;

  constructor(public http: HttpClient,
    private idle: Idle, 
    private keepalive: Keepalive, //public navCtrl: NavController, 
    public toastService: ToastServiceProvider) {
    console.log('Hello IdleTimerProvider Provider');
  }

  monitorIdle(){
    // sets an idle timeout of 5 seconds, for testing purposes.
    this.idle.setIdle(5);
    // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
    this.idle.setTimeout(5);
    // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
    this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    this.idle.onIdleEnd.subscribe(() => this.idleState = 'No longer idle.');
    this.idle.onTimeout.subscribe(() => {
      this.idleState = 'Timed out!';
      this.timedOut = true;
     // this.navCtrl.push(TimeoutPage);
      this.toastService.show('You have been logged out due to inactivity');
    });

    this.idle.onIdleStart.subscribe(() => this.idleState = 'You\'ve gone idle!');
    this.idle.onTimeoutWarning.subscribe((countdown) => this.idleState = 'You will time out in ' + countdown + ' seconds!');

    // sets the ping interval to 15 seconds
    this.keepalive.interval(15);

    this.keepalive.onPing.subscribe(() => this.lastPing = new Date());

    this.reset();
  }

  reset() {
    this.idle.watch();
    this.idleState = 'Started.';
    this.timedOut = false;
  }


}
