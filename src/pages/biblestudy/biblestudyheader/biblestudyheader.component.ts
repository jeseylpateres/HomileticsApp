import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-biblestudy-header',
  templateUrl: 'biblestudyheader.html',
})
export class BibleStudyHeader {

  @Input()
  public book: string;
  
  public chapter: number = 0;
  public verseStart: number = 0;
  public verseEnd: number = 0;
  public isDisplay: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.navParams);
    // this._book = "John";
    // this._chapter = 1;
    // this._verseStart = 1;
    // this._verseEnd = 12;
    this.book = this.navParams.get("book");
    this.chapter = this.navParams.get("chapter");
    this.verseStart = this.navParams.get("verseStart");
    this.verseEnd = this.navParams.get("verseEnd");
    this.checkValueIsEmpty();
  }

  ionViewWillEnter() {
    this.checkValueIsEmpty();
  }

  public checkValueIsEmpty(): boolean {

    this.isDisplay = false;

    if(this.book == "" || this.book == null || this.book == "Untitled Study") {
      this.book  = "Untitled Study";
      return this.isDisplay;
    } else {
      if (this.chapter == 0 || this.verseStart == 0 || this.verseEnd == 0) {
        this.isDisplay = false;
      } else {
        this.isDisplay = true;
      }
    }

    console.log(this.book);
    return this.isDisplay;
  }


}
