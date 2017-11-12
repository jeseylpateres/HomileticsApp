import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
/**
 * ENUMS
 */
import { GotoPage } from "../../core/enums/gotopage.enum";
/**
 * PAGES
 */
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { StudyInputPage } from '../study/study-input';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  pages : any;

  constructor(public navCtrl: NavController) {}

  /**
   * on Load Other Pages
   * 
   * @param gotoPage 
   */
  onLoadPage(gotoPage : GotoPage) {
    switch (gotoPage) {
      case GotoPage.Menu:
        this.navCtrl.push(MenuPage);
        break;
      case GotoPage.Home:
        this.navCtrl.push(HomePage);
        break;
      case GotoPage.StudyInput:
        this.navCtrl.push(StudyInputPage);    
        break;
      default:
        this.navCtrl.push(LoginPage);
        break;
    }
  }
}
