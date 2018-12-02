import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { App } from 'ionic-angular';

// providers
import { AuthProvider } from '../../providers/auth/auth';
import { TabsPage } from '../../../common/pages/tabs/tabs';

// @IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private userName:string;
  private userPwd:string;

  constructor(
    public navCtrl: NavController, 
    public alertCtrl:AlertController,
    public navParams: NavParams,
    private authService: AuthProvider,
    private app: App
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  authWithCredentials(){
    const status = this.authService.authenticateUser(this.userName,this.userPwd);
    if(status==true){
     //// this.navCtrl.setRoot(TabsPage);
     // this.navCtrl.root;// this.navCtrl.setRoot(TabsPage);
     this.app.getRootNav().push(TabsPage);


    }else{
     const popup = this.alertCtrl.create({
        title:"Error",
        message: "the username/password is wrong, try again",
        buttons:[{
          text:'cancel',
          handler: this.cancelled(),
        }],
      });

      popup.present();
    }
  }

  
  authWithBiometric(){
    
  }

  cancelled(){
    this.userPwd = '';
    return null;
  }  
}
