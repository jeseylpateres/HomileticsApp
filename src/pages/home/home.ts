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

  SegmentBookType: string = "entirebible";
  completeStudies: number = 2;
  ongoingStudies: number = 5;
  quizes: number = 0;
  totalStudies: number = 0;
  percentageCompletion: number = 0;
  bibleTestament: string = this.getBookTestamentById(0, BookType.OldAndNewTestament);
  bibleTitleForONT: string = this.getTitleById(0, BookType.OldAndNewTestament);
  bibleTitleForOT: string =  this.getTitleById(0, BookType.OldTestament);
  bibleTitleForNT: string = this.getTitleById(0, BookType.NewTestament);
  //bibleReferencesForONT: boolean[] = this.getSetOfStatusPerPerDivisions(0);


  private setAllChapterOfOldAndNewT = this.getAllChapters(BookType.OldAndNewTestament);  
  private setAllChapterOfOldT = this.getAllChapters(BookType.OldTestament);
  private setAllChapterOfNewT = this.getAllChapters(BookType.NewTestament);

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
      let x =this.getAllAbbreviationOfBook(BookType.OldAndNewTestament);
  }
  

  public randomize(segment: number):void {
    let clone = null;
    switch (segment) {
      // Old & New Testament
      case 1:
        {
          this.setStudy(
            0, 
            this.DashboardChart.chartDataPerBookType[0].chartDataSet[0].data[0], 
            this.DashboardChart.chartDataPerBookType[0].chartDataSet[1].data[0], 
            BookType.OldAndNewTestament);

          clone = JSON.parse(JSON.stringify(this.DashboardChart.chartDataPerBookType[0].chartDataSet));
          clone[0].data = this.setRandomDataForAllChapters(BookType.OldAndNewTestament);
          this.DashboardChart.chartDataPerBookType[0].chartDataSet = clone;
        }
        break;
      // Old Testament Only
      case 2:
        {
          this.setStudy(
            0, 
            this.DashboardChart.chartDataPerBookType[0].chartDataSet[0].data[0], 
            this.DashboardChart.chartDataPerBookType[0].chartDataSet[1].data[0], 
            BookType.OldTestament);

          clone = JSON.parse(JSON.stringify(this.DashboardChart.chartDataPerBookType[1].chartDataSet));
          clone[0].data = this.setRandomDataForAllChapters(BookType.OldTestament);
          this.DashboardChart.chartDataPerBookType[1].chartDataSet = clone;
        }
        break;
      // New Testament Only
      case 3:
        {
          this.setStudy(
            0, 
            this.DashboardChart.chartDataPerBookType[0].chartDataSet[0].data[0], 
            this.DashboardChart.chartDataPerBookType[0].chartDataSet[1].data[0], 
            BookType.NewTestament);
          
          clone = JSON.parse(JSON.stringify(this.DashboardChart.chartDataPerBookType[2].chartDataSet));
          clone[0].data = this.setRandomDataForAllChapters(BookType.OldTestament);
          this.DashboardChart.chartDataPerBookType[2].chartDataSet = clone;
        }
        break; 
        
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
  public BarChartLabelsForOld:string[] = this.getAllAbbreviationOfBook(BookType.OldTestament);

  // Events: Click for Bar Chart - OT
  public clickChartForOld(e:any):void {
    console.log(e);
    
    let x= e.active[0];
    if(x !== undefined) {
      console.log("Bar Index: " + x._index);
      this.setStudy(
        x._index, 
        this.DashboardChart.chartDataPerBookType[1].chartDataSet[0].data[x._index], 
        this.DashboardChart.chartDataPerBookType[1].chartDataSet[1].data[x._index], 
        BookType.OldTestament);
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
  public BarChartLabelsForNew:string[] = this.getAllAbbreviationOfBook(BookType.NewTestament);

  // Events: Click for Bar Chart - NT
  public clickChartForNew(e:any):void {
    console.log(e);
    
    let x= e.active[0];
    if(x !== undefined) {
      console.log("Bar Index: " + x._index);
      this.setStudy(
        x._index, 
        this.DashboardChart.chartDataPerBookType[1].chartDataSet[0].data[x._index], 
        this.DashboardChart.chartDataPerBookType[1].chartDataSet[1].data[x._index], 
        BookType.NewTestament);
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

  public DashboardChart : any = {
      chartType: 'bar',
      chartLegend: false,
      chartColors: [
        {
          backgroundColor: 'rgba(61, 163, 108, 1)',
          borderColor: 'rgba(61, 163, 108, 1)'
        }
       ],
      // Chart Data Per BookType
      chartDataPerBookType : [
        
        /**
         * ========================================
         * BookType : Old and New Testament
         * ========================================
         */
        {
          // Chart Options
          chartOptions : {
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
            },
          // Chart DataSet
          chartDataSet : [
            {
              label: 'Complete Study',
              data: [] = this.clearAllDataForAllChapters(BookType.OldAndNewTestament)
            },
            {
              label: 'Total Chapter',
              data: this.setAllChapterOfOldAndNewT
            }
          ],
          // Chart Label
          chartLabels : this.getAllAbbreviationOfBook(BookType.OldAndNewTestament)
        },

        /**
         * ========================================
         * BookType : Old Testament
         * ========================================
         */
        {
          // Chart Options
          chartOptions : {
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
            },
          // Chart DataSet
          chartDataSet : [
            {
              label: 'Complete Study',
              data: [] = this.clearAllDataForAllChapters(BookType.OldTestament)
            },
            {
              label: 'Total Chapter',
              data: this.setAllChapterOfOldT
            }
          ],
          // Chart Label
          chartLabels : this.getAllAbbreviationOfBook(BookType.OldTestament)
        },
        
        /**
         * ========================================
         * BookType : New Testament
         * ========================================
         */
        {
          // Chart Options
          chartOptions : {
              scaleShowVerticalLines: false,    
              responsive: false,
              //maintainAspectRatio: true,
              title:{
                display : false,
                text: 'NEW TESTAMENT'
              },
              scales:{
                xAxes:[{
                  stacked:true
                }],
                yAxes:[{
                  stacked:false
                }]
              }
            },
          // Chart DataSet
          chartDataSet : [
            {
              label: 'Complete Study',
              data: [] = this.clearAllDataForAllChapters(BookType.NewTestament)
            },
            {
              label: 'Total Chapter',
              data: this.setAllChapterOfNewT
            }
          ],
          // Chart Label
          chartLabels : this.getAllAbbreviationOfBook(BookType.NewTestament)
        },
      ]
      
    };
  
  // Events: Click for Bar Chart - ONT
  public clickChartForOldAndNew(e:any) : void {
    //console.log(e);
    let x = e.active[0];
    if(x !== undefined) {
      console.log("Bar Index: " + x._index);
      this.setStudy(
          x._index, 
          this.DashboardChart.chartDataPerBookType[0].chartDataSet[0].data[x._index], 
          this.DashboardChart.chartDataPerBookType[0].chartDataSet[1].data[x._index], 
          BookType.OldAndNewTestament);
    }
  }
  
  // Events: Howevered for Bar Chart - ONT
  public howeveredChartForOldAndNew(e:any):void {
    console.log("HowverResult: " + e);
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