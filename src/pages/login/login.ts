import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { SignupPage } from '../signup/signup';
import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';
import { MenuPage } from '../menu/menu';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  login() {
    //navCtrl.push(TabsPage, {}, {animate: false});
    this.navCtrl.push(MenuPage);
  }

  signup() {
    this.navCtrl.push(SignupPage);
  }

  forgotpassword() {
    this.navCtrl.push(ForgotpasswordPage);
  }

}
