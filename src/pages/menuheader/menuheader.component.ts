import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { HomePage } from '../home/home';

import { GotoPage } from '../../core/enums/gotopage.enum';
import { StudyInputPage } from '../study/study-input';
import { StudyPreviewPage } from '../study/study-preview';

@Component({
  selector: 'page-menu-header',
  templateUrl: 'menuheader.html',
})
export class MenuHeader {

  constructor(public navCtrl: NavController) {
  }

  /**
   * OnLoad Other Pages
   * 
   * @param gotoPage 
   */
  onLoadPage(gotoPage: GotoPage) {

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
      case GotoPage.StudyPreview:
        this.navCtrl.push(StudyPreviewPage);
        break;
      default:
        console.log("Select Again!");
        break;
    }
  }

}
