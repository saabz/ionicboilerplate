import { NgModule, ErrorHandler } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

//providers
import { RestInterceptorProvider } from './providers/rest-interceptor/rest-interceptor';

//pages
import { TabsPage } from './pages/tabs/tabs';
import { ContactPage } from './pages/contact/contact';
import { HomePage } from './pages/home/home';

//feature modules
import { AccountModule } from '../account/account.module';

@NgModule({
  declarations: [
    TabsPage,
    ContactPage,
    HomePage
  ],
  imports: [
    BrowserModule,
    AccountModule,
    IonicPageModule.forChild([TabsPage])
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    TabsPage,
    ContactPage,
    HomePage
  ],
  providers: [    
    RestInterceptorProvider
  ],
  exports:[ 
      TabsPage
  ],
})
export class CommonModule {}
