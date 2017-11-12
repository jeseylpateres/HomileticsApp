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
    templateUrl: 'study-preview.html',
    providers: [StudiesService]
})
export class StudyPreviewPage {

    title: string;
    summarySentent: string;

    constructor(private studiesService: StudiesService,
        private navCtrl: NavController,
        public navParams: NavParams) {

        this.title = (this.navParams.get("book") + " "
            + this.navParams.get("chapter") + " : "
            + this.navParams.get("divisionVerseStart") + " - "
            + this.navParams.get("divisionVerseEnd"));
        this.summarySentent = this.navParams.get("summarySentense");
    }

    onLoadPage(gotoPage: GotoPage) {

        switch (gotoPage) {
            case GotoPage.Menu:
                this.navCtrl.push(MenuPage);
                break;
            case GotoPage.Home:
                this.navCtrl.push(HomePage);
                break;
            default:
                this.navCtrl.push(LoginPage);
                break;
        }
    }

}
