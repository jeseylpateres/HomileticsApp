import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  responseData : any;
  userData = {"name" : "", "email" : "", "password" : ""};


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  signup() {
    //authService
    // here...

    //redirect to LoginPage
    this.navCtrl.push(LoginPage);
  }

  login() {
    this.navCtrl.push(LoginPage);
  }

}
