import { NgModule } from '@angular/core'; // , ErrorHandler
import { IonicPageModule } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule } from 'ionic-angular'; // , IonicErrorHandler
import { IonicStorageModule } from '@ionic/storage';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive'; // this includes the core NgIdleModule but includes keepalive providers for easy wireup
import { MomentModule } from 'angular2-moment'; // optional, provides moment-style pipes for date formatting

//providers
import { RestInterceptorProvider } from './providers/rest-interceptor/rest-interceptor';
import { ToastServiceProvider } from './providers/toast-service/toast-service';
import { LoaderServiceProvider } from './providers/loader-service/loader-service';
import { IdleTimerProvider } from './providers/idle-timer/idle-timer';
import { ConfigProvider } from './providers/config/config';

//pages
import { TabsPage } from './pages/tabs/tabs';
import { ContactPage } from './pages/contact/contact';
import { HomePage } from './pages/home/home';

//feature modules
import { AccountModule } from '../account/account.module';
import { InterceptorModule } from './interceptor.module';

@NgModule({
  declarations: [
    TabsPage,
    ContactPage,
    HomePage
  ],
  imports: [
    BrowserModule,
    AccountModule,
    IonicModule,
    IonicPageModule.forChild([TabsPage]),
    InterceptorModule,
    MomentModule,
    IonicStorageModule.forRoot(),
    NgIdleKeepaliveModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    TabsPage,
    ContactPage,
    HomePage
  ],
  providers: [    
    RestInterceptorProvider,
    ToastServiceProvider,
    LoaderServiceProvider,
    IdleTimerProvider, 
    ConfigProvider
  ],
  exports:[ 
      TabsPage
  ],
})
export class CommonModule {}
