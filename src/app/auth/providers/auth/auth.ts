import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(
    public http: HttpClient,
    private storage: Storage  
  ) {
    console.log('Hello AuthProvider Provider');
  }

  isAuthenticated(){
    this.storage.get('auth_token').then(val=>{
      if(val){
       return true;
      }else{
        return false;
      }
     });
    
  }

  authenticateUser(userName, password){
    const requestPayload = { userName: userName, pwd: password  };
    if(userName == 'tom' && password=='ccra57'){
      let token = userName+password;      
      this.storage.set('auth_token',token);
      
      return true;
    }else{
      return false;
    }
    /* this.http.post("https://jsonplaceholder.typicode.com/user/authenticate",requestPayload)
            .subscribe(
              success=>{
                console.log(success);
              },
              err=>{
                console.log(err);
              }
            )
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe(
      success => {
        console.log("Successfully Completed");
        console.log(success);
      }
    );*/
  }

  logoutUser(){
    this.storage.remove('auth_token');
  }


}
