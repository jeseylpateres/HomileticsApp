import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { BookType } from "../core/enums/booktype";

import { MenuPage } from '../menu/menu';


import { BibleDataService } from "../model/bible/bible-data-service";



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage extends BibleDataService {

  private User = null;

  segmentbook1: string = "entirebible";
  completeStudies: number = 2;
  ongoingStudies: number = 5;
  quizes: number = 0;
  totalStudies: number = 0;
  percentageCompletion: number = 0;
  bibleTestament: string;
  bibleTitleForONT: string = this.getTitleById(0, BookType.OldAndNewTestament);
  bibleTitleForOT: string =  this.getTitleById(0, BookType.OldTestament);
  bibleTitleForNT: string = this.getTitleById(0, BookType.NewTestament);
  //bibleReferencesForONT: boolean[] = this.getSetOfStatusPerPerDivisions(0);


  private setAllChapterOfOldAndNewT = this.getAllChaptersOfOldAndNewTestament();
  private setAllChapterOfOldT = this.getAllChaptersOfOldTestament();
  private setAllChapterOfNewT = this.getAllChaptersOfNewTestament();

  constructor(public navCtrl: NavController, public app: App) {
      super();
      let userid = 0;
      this.setUserId(userid);
     
      //Set UserId
      this.User = this.bookUsers[0];
      //console.log(this.User.userEmail);
      //this.getSetOfStatusPerPerDivisions(0);
      //this.BarChartDataSetForOldAndNew = this.getAllAbbvOfOldAndNewTestament();

      console.log("Jeseyl");
      let t = this.getArrayOfVerses(BookType.OldAndNewTestament);
  }


  /**
   * Common for All BarChart
   * ONT - Old and New Testament
   * OT - Old Testament
   * NT - New Testament
   */
  public BarChartType:string = 'bar';
  public BarChartLegend:boolean = false;
  public BarChartColors:any[] = [
    {
      backgroundColor: 'rgba(61, 163, 108, 1)',
      borderColor: 'rgba(61, 163, 108, 1)'
    }
  ];

  /**
   * ENTIRE TESTAMENT : Start ===============================================
   */

  // Options for Bar Chart - ONT
  public BarChartOptionsForOldAndNew:any = {
    scaleShowVerticalLines: false,    
    responsive: false,
    //maintainAspectRatio: true,
    title:{
      display : false,
      text: 'ENTIRE BIBLE'
    },
    scales:{
      xAxes:[{
        stacked:true
      }],
      yAxes:[{
        stacked:false
      }]
    }
  };

  // DataSet for Bar Chart - ONT
  public BarChartDataSetForOldAndNew:any[] = [
    {
      label: 'Complete Study',
      data: [] = this.clearAllDataForAllChapters(BookType.OldAndNewTestament)/*[ 
          20, 40, 0, 10, 0, 
          0, 21, 0, 0, 0, 
          0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 
          0, 0, 0, 0, 5, 
          10, 2, 20, 0, 0,
          0, 0, 0, 3, 0, 
          0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0,
          0, 1, 1, 1, 1, 1
      ]*/
    },
    {
      label: 'Total Chapter',
      data: this.setAllChapterOfOldAndNewT
    }
  ];

  // Labels for Bar Chart - ONT
  public BarChartLabelsForOldAndNew:string[] = this.getAllAbbvOfOldAndNewTestament();

  // Events: Click for Bar Chart - ONT
  public clickChartForOldAndNew(e:any) : void {
    //console.log(e);
    let x = e.active[0];
    if(x !== undefined) {
      this.setStudy(x._index, this.BarChartDataSetForOldAndNew[0].data[x._index], this.BarChartDataSetForOldAndNew[1].data[x._index], BookType.OldAndNewTestament);
    }
  }
  
  // Events: Howevered for Bar Chart - ONT
  public howeveredChartForOldAndNew(e:any):void {
    console.log("HowverResult: " + e);
  }
  
  

  public randomize(segment: number):void {
    let clone = null;
    switch (segment) {
      // Old and New Testament
      case 1:
        {
          clone = JSON.parse(JSON.stringify(this.BarChartDataSetForOldAndNew));
          clone[0].data = this.setRandomDataForAllChapters(BookType.OldAndNewTestament);
          this.BarChartDataSetForOldAndNew = clone;
          break;
        }
      // Old Testament Only
      case 2:
        {
          clone = JSON.parse(JSON.stringify( this.BarChartDataSetForOld));
          clone[0].data = this.setRandomDataForAllChapters(BookType.OldTestament);
          this.BarChartDataSetForOld = clone;
          break;
        }
      // New Testament Only
      case 3:
        {
          clone = JSON.parse(JSON.stringify(this.BarChartDataSetForNew));
          clone[0].data = this.setRandomDataForAllChapters(BookType.NewTestament);
          this.BarChartDataSetForNew = clone;
          break; 
        }
      default:
      break;
    }
  }
  // ENTIRE TESTAMENT : END ===============================================


  // OLD TESTAMENT : START ================================================

  // Options for Bar Chart - OT
  public BarChartOptionsForOld:any = {
    scaleShowVerticalLines: false,    
    responsive: false,
    //maintainAspectRatio: true,
    title:{
      display : false,
      text: 'OLD TESTAMENT'
    },
    scales:{
      xAxes:[{
          stacked:true
      }],
      yAxes:[{
          stacked:false
      }]
    }
  };

  // DataSet for Bar Chart - OT
  public BarChartDataSetForOld:any[] = [
    {
      label: 'Complete Study',
      data: this.clearAllDataForAllChapters(BookType.OldTestament)/*[ /*[
          20, 0, 0, 10, 0, 0, 21, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 2, 2, 2, 2
      ]*/
    },
    {
      label: 'Total Chapter',
      data: this.setAllChapterOfOldT
    }
  ];

  // Labels for Bar Chart - OT
  public BarChartLabelsForOld:string[] = this.getAllAbbvOfOldTestament();

  // Events: Click for Bar Chart - OT
  public clickChartForOld(e:any):void {
    console.log(e);
    
    let x= e.active[0];
    if(x !== undefined) {
      console.log("Bar #: " + x._index);
      console.log(x._model.datasetLabel);
      console.log(x._model.label);
      this.completeStudies = x._index;
      console.log("getBarChartLevel: " + this.BarChartLabelsForOldAndNew[x._index]);
      this.setStudy(x._index, this.BarChartDataSetForOld[0].data[x._index], this.BarChartDataSetForOld[1].data[x._index], BookType.OldTestament);
    }
  }

  // Events: Howevered for Bar Chart - ONT
  public howeveredChartForOld(e:any):void {
    console.log("HowverResult: " + e);
  }
  // OLD TESTAMENT : END ================================================


  // NEW TESTAMENT : START ================================================

  // Options for Bar Chart - NT
  public BarChartOptionsForNew:any = {
    scaleShowVerticalLines: false,    
    responsive: false,
    //maintainAspectRatio: true,
    title:{
      display : false,
      text: 'OLD TESTAMENT'
    },
    scales:{
      xAxes:[{
          stacked:true
      }],
      yAxes:[{
          stacked:false
      }]
    }
  };

  // DataSet for Bar Chart - NT
  public BarChartDataSetForNew:any[] = [
    {
      label: 'Complete Study',
      data: this.clearAllDataForAllChapters(BookType.NewTestament)/*[
        5, 10, 2, 20, 0, 0, 0, 0, 0, 3, 
        0, 0, 0, 0, 0, 0, 0, 0, 11, 0,
        0, 0, 0, 0, 0, 0, 10
      ]*/
    },
    {
      label: 'Total Chapter',
      data: this.setAllChapterOfNewT
    }
  ];

  // Labels for Bar Chart - NT
  public BarChartLabelsForNew:string[] = this.getAllAbbvOfNewTestament();

  // Events: Click for Bar Chart - NT
  public clickChartForNew(e:any):void {
    console.log(e);
    
    let x= e.active[0];
    if(x !== undefined) {
      console.log("Bar #: " + x._index);
      console.log(x._model.datasetLabel);
      console.log(x._model.label);
      this.completeStudies = x._index;
      console.log("getBarChartLevel: " + this.BarChartLabelsForOldAndNew[x._index]);
      this.setStudy(x._index, this.BarChartDataSetForNew[0].data[x._index], this.BarChartDataSetForNew[1].data[x._index], BookType.NewTestament);
    }
  }

  // Events: Howevered for Bar Chart - NT
  public howeveredChartForNew(e:any):void {
    console.log("HowverResult: " + e);
  }
  // NEW TESTAMENT : END ================================================

  private menu(){
    //this.navCtrl.push(MenuPage);
    console.log("Study Page");
  }

  private setStudy(index: number, completestudy: number, totalchapter: number, state: number) {
    let ongoingstudy = totalchapter - completestudy;
    let getdecimalvalue = completestudy / totalchapter;
    let percentagecompletion;

    if(getdecimalvalue < 0) {
      percentagecompletion = 0;
    } else {
      percentagecompletion = Math.floor((getdecimalvalue) * 100);
    }
    

    this.completeStudies = completestudy;
    this.ongoingStudies = ongoingstudy;
    this.totalStudies = totalchapter;
    this.percentageCompletion = percentagecompletion;

    // set book title per sergment
    switch (state) {
      case 1:
        this.bibleTestament = this.getBookTestamentById(index, BookType.OldAndNewTestament);
        this.bibleTitleForONT = this.getTitleById(index, BookType.OldAndNewTestament);
        break;
      case 2:
        this.bibleTestament = this.getBookTestamentById(index, BookType.OldTestament);
        this.bibleTitleForOT = this.getTitleById(index, BookType.OldTestament);
        break;
      case 3:
        this.bibleTestament = this.getBookTestamentById(index, BookType.NewTestament);
        this.bibleTitleForNT = this.getTitleById(index, BookType.NewTestament);
      default:
        break;
    }
  }

}
/**
 * 
enum BookType {
  OldAndNewTestament = 1,
  OldTestament = 2,
  NewTestament = 3
}
 */