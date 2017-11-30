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
  private searchQuerybible: string;
  private chapterStartList = [];
  private chapterEndList = [];
  private chapterStart: number;
  private chapterEnd: number;
  private verseStartList = [];
  private verseEndList = [];
  private verseStart: number;
  private verseEnd: number;

  public progressStatus: number;
  public progressMaxValue: number = 100;

  // private books: Array<any> = [];
  private bible: Bible;
  private studyBible: StudyBible;
  private isDisplay: boolean = false;
  // private booklist = [];
  private myInput: string = '';


  constructor(private studiesService: StudiesService,
    private bibleService: BibleService,
    private navCtrl: NavController,
    public navParams: NavParams) {

    this.studyBible = new StudyBible();
    this.studyBible.book = "Untitled Study";
    this.progressStatus = 0;

    this.chapterStart = 0;
    this.chapterEnd = 0;
    // this.chapterStartList = this.getChapters();
    // console.log(this.getChapters());


    // this.bible = new Bible();
    // console.log("Result: " + this.navParams.get("bookId"));
    // console.log("Result: " + this.navParams.get("book"));
    // this.bible.book = this.myInput;
  }

  /**
   * Checking Progress Status
   */
  public checkProgressStatus(): number {
    if (this.progressMaxValue < this.progressStatus) {
      this.progressStatus = 100;
    }
    return this.progressStatus;
  }

  /**
   * Search Bible Book
   */
  onSearch() {
    if (this.bibleService.getBooksInfoOfBible(this.searchQuerybible) !== null) {
      this.bible = this.bibleService.getBooksInfoOfBible(this.searchQuerybible);
      this.studyBible.book = this.bible.book;
      this.isDisplay = true;
      //  console.log(this.bible);
    }
    if (this.bibleService.getBooksInfoOfBible(this.searchQuerybible) === null) {
      this.studyBible.book = "Untitled Study";
      this.isDisplay = false;
      // console.log("Try Again!");
      // console.log(this.isDisplay);
      this.studyBible.book = "Untitled Study";
    }

    //call getChapter()
    this.chapterStartList = this.getChapters();
    this.chapterEndList = this.getChapters();
  }

  /**
   * Get Number Only
   * e.g. Input: Chapter 12
   *      Return: 12
   * 
   * @param val 
   * @return number
   */
  getNumberOnly(val: any): number {
    let numb = val.toString().match(/\d/g);
    val = Number(numb.toString().split(',').join(''));
    return val;
  }

  test(val : any) {
    console.log(val);
  }

  generateVerseFromChapterSelected() {
    this.chapterEndList = this.getChapters();
  }

  getChapters(): number[] {
    let num = this.getNumberOnly(this.chapterStart);
    let cValue = [];
    let value;
    if (num != Number(0)) {
      if (num > this.bible.chapters) {
        cValue.push(0);
        return cValue;
      }
      for (value = num; value <= this.bible.chapters; value++) {
        cValue.push(value);
      }
      return cValue;
    }

    for (let value = 1; value <= this.bible.chapters; value++) {
      cValue.push(value);
    }
    return cValue;
  }

  getVerses(chptr : any, chapterSelected : number) {
    let vValue = [];
    let vers : number = this.bible.verses[chptr - 1];
    // console.log("vers: " + vers);

    for(let x = 1; x <= vers; x++) {
      vValue.push(x);
    }
    
    switch(chapterSelected) {
      case 1:
        this.verseStartList = vValue;
        break;
      case 2:
        this.verseEndList = vValue;
      default:
        break;
    }
  }

  /**
   * Clear the search box
   */
  onClear() {
    this.studyBible.book = "";
  }

  // onAddStudy(value: { title: string, gender: string }) {
  //   this.studiesService.addStudy(value);
  //   console.log("Value" + value + " : " + value.title);
  //   this.navCtrl.pop()
  // }
}
