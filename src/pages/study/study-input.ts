import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { GotoPage } from "../../core/enums/gotopage.enum";
/**
 * SERVICES
 */
import { StudiesService } from "../../services/studies/studies.service";
/**
 * MODELS
 */

/**
 * PAGES
 */
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { MenuPage } from "../menu/menu";

@Component({
  selector: 'page-study-input',
  templateUrl: 'study-input.html',
  providers: [StudiesService]
})
export class StudyInputPage {



  constructor(private studiesService: StudiesService, 
    private navCtrl: NavController, 
    public navParams: NavParams) { 

      console.log("Result: "+ this.navParams.get("bookId"));
      console.log("Result: "+ this.navParams.get("book"));
  }


  onAddStudy(value: { title: string }) {
    this.studiesService.addStudy(value);
    console.log("Value" + value + " : " + value.title);
    this.navCtrl.pop()
  }

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
      default:
        this.navCtrl.push(LoginPage);
        break;
    }
  }

}
