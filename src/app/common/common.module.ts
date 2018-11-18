import { NgModule, ErrorHandler } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

//providers
import { RestInterceptorProvider } from './providers/rest-interceptor/rest-interceptor';
import { ToastServiceProvider } from './providers/toast-service/toast-service';
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
  ],
  exports:[ 
      TabsPage
  ],
})
export class CommonModule {}
