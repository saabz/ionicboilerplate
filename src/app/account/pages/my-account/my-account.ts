import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-about',
  templateUrl: 'my-account.html'
})
export class MyAccountPage {

  constructor(public navCtrl: NavController , public http: HttpClient) {

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
}
