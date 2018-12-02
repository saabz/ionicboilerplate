import { Component } from '@angular/core';
import { App, NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

// pages
import { LoginPage } from '../../../auth/pages/login/login';

// providers
import { AuthProvider } from '../../../auth/providers/auth/auth';

@Component({
  selector: 'page-about',
  templateUrl: 'my-account.html'
})
export class MyAccountPage {

  constructor(
    public navCtrl: NavController , 
    public http: HttpClient,
    private app: App,
    private auth: AuthProvider
  ) {

  }

  invokeService(){
    console.log("Service Invoked");

    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe(
      success => {
        console.log("Successfully Completed");
        console.log(success);
      }
    );
  }

  logoutUser(){
    // this.navCtrl.setRoot(LoginPage);
    this.auth.logoutUser();
    this.app.getRootNav().push(LoginPage);
  }

}
