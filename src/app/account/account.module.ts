import { NgModule,  } from '@angular/core'; // ErrorHandler
import { IonicPageModule } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http'; 
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
    IonicModule,
    HttpClientModule,
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
