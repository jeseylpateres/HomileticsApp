import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { BibleStudyHeader } from "../biblestudyheader/biblestudyheader.component";


@Component({
  selector: 'page-biblestudy-input',
  templateUrl: 'biblestudyinput.html',
})
export class BibleStudyInput {

  book: string;
  childBook: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
/*
  onSubmit(){
    console.log("Test");
    this.childBook = this.book;
  }*/

 }
