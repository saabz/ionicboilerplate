import { NgModule, ErrorHandler } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

//pages
import { MyAccountPage } from './pages/my-account/my-account';

//providers
import { AccountServiceProvider } from './providers/account-service/account-service';

@NgModule({
  declarations: [
    MyAccountPage,
  ],
  imports: [
    BrowserModule,
    IonicPageModule.forChild(MyAccountPage)   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    
  ],
  providers: [    
    AccountServiceProvider
  ]
})
export class AccountModule {}
