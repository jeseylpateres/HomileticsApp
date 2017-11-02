import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  pages : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  home(){
    this.navCtrl.push(HomePage);
  }

  login(){
    //this.navCtrl.push(LoginPage);
  }

  others(){
    var msg = "OTHER PAGE";
    console.log(msg);
  }

}
