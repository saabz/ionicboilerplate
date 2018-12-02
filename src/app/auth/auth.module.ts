import { NgModule } from '@angular/core'; // , ErrorHandler
import { IonicPageModule } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule } from 'ionic-angular'; // , IonicErrorHandler
import { FormsModule } from '@angular/forms';
// providers
import { AuthProvider } from './providers/auth/auth';

// pages
import { LoginPage } from './pages/login/login';

// feature modules
import { InterceptorModule } from '../common/interceptor.module';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    BrowserModule,
    IonicModule,
    FormsModule,
    IonicPageModule.forChild([LoginPage]),
    InterceptorModule    
  ],
  bootstrap: [IonicApp],
  providers: [    
    AuthProvider
  ],
  exports:[ 
    LoginPage  
  ],
})
export class AuthModule {}
