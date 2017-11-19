import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
/**
 * ENUMS
 */
import { BookType } from "../../core/enums/booktype.enum";
import { GotoPage } from "../../core/enums/gotopage.enum";
/**
 * SERVICES
 */
import { StudiesService } from "../../services/studies/studies.service";
import { BibleService } from "../../services/bible/bible.service";
/**
 * MODELS
 */
import { Bible } from "../../models/bible/bible.model";
import { StudyBible } from "../../models/biblestudy/study-bible.model";
/**
 * PAGES
 */
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { MenuPage } from "../menu/menu";

@Component({
  selector: 'page-study-input',
  templateUrl: 'study-input.html',
  providers: [StudiesService, BibleService]
})
export class StudyInputPage {

  private books: Array<any> = [];
  private bible: Bible;
  private studyBible: StudyBible;
  private isDisplay: boolean = false;


  constructor(private studiesService: StudiesService,
    private bibleService: BibleService,
    private navCtrl: NavController,
    public navParams: NavParams) {

    this.bible = new Bible();
    this.studyBible = new StudyBible();
    this.studyBible.book = "Untitled Study";
    this.books = this.bibleService.getAllBooksOfBible(BookType.OldAndNewTestament);

    console.log("Result: " + this.navParams.get("bookId"));
    console.log("Result: " + this.navParams.get("book"));
  }

  onClickAddStudy(value: { book: string }) {
    //console.log("book: " + value.book);
    if (this.bibleService.getBooksInfoOfBible(value.book) !== null) {
      this.bible = this.bibleService.getBooksInfoOfBible(value.book);
      this.studyBible.book = this.bible.book;
      this.isDisplay = true;
    }
    if(this.bibleService.getBooksInfoOfBible(value.book) === null) {
      console.log("Try Again!");
      this.studyBible.book = "Untitled Study";
      this.isDisplay = false;
      
    }
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
