import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { NavController, App } from 'ionic-angular';

import { BookType } from "../core/enums/booktype";
import { Dashboard } from "../model/dashboard/dashboard-model";
import { MenuPage } from '../menu/menu';

import { BibleDataService } from "../model/bible/bible-data-service";



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage extends BibleDataService implements OnInit {

  dashboard : Dashboard;
  SegmentBookType: string;

  constructor(public navCtrl: NavController, public app: App) {
      super();
      this.dashboard = new Dashboard();

      let userid = 0;
      this.setUserId(userid);
  }

  ngOnInit() {
    this.SegmentBookType = "entirebible";
/*
    this.dashboard.completeStudies = 0;
    this.dashboard.ongoingStudies = 0;
    this.dashboard.ongoingQuizes = 0;
    this.dashboard.bookTestament = null;
    this.dashboard.bookTitle = null;
    this.dashboard.bookTotalStudies = 0;
    this.dashboard.percentageCompletion = 0;
    */
  }
  
  private menu(){
    //this.navCtrl.push(MenuPage);
    console.log("Study Page");
  }
  

  /**
   * [PUBLIC]
   * Set Random Data
   * 
   * @param segment 
   */
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
          clone[0].data = this.setRandomDataForAllChapters(BookType.NewTestament);
          this.DashboardChart.chartDataPerBookType[2].chartDataSet = clone;
        }
        break; 
        
      default:
        break;
    }
  }
  

  /**
   * [EVENTS] Click
   * OLD and NEW Testament
   * 
   * @param e 
   */
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
  
  /**
   * [EVENTS] However
   * OLD and NEW Testament
   * 
   * @param e 
   */
  public howeveredChartForOldAndNew(e:any):void {
    console.log("HowverResult: " + e);
  }


  // Events: Click for Bar Chart - OT
  /**
   * [EVENTS] Click
   * OLD Testament
   * 
   * @param e 
   */
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

  /**
   * [EVENTS] However
   * OLD Testament
   * 
   * @param e 
   */
  public howeveredChartForOld(e:any):void {
    console.log("HowverResult: " + e);
  }
  

  /**
   * [EVENTS] Click
   * NEW Testament
   * 
   * @param e 
   */
  public clickChartForNew(e:any):void {
    console.log(e);
    
    let x= e.active[0];
    if(x !== undefined) {
      console.log("Bar Index: " + x._index);
      this.setStudy(
        x._index, 
        this.DashboardChart.chartDataPerBookType[2].chartDataSet[0].data[x._index], 
        this.DashboardChart.chartDataPerBookType[2].chartDataSet[1].data[x._index], 
        BookType.NewTestament);
    }
  }

  /**
   * [EVENTS] However
   * NEW Testament
   * 
   * @param e 
   */
  public howeveredChartForNew(e:any):void {
    console.log("HowverResult: " + e);
  }
  
  /**
   * *********************************************************************
   * *********************************************************************
   * [PUBLIC] : Chart Dashboard
   * *********************************************************************
   * *********************************************************************
   */
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
       * ----------------------------------------
       * BookType : Old and New Testament
       * ----------------------------------------
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
            data: this.getAllChapters(BookType.OldAndNewTestament)
          }
        ],
        // Chart Label
        chartLabels : this.getAllAbbreviationOfBook(BookType.OldAndNewTestament)
      },

      /**
       * ----------------------------------------
       * BookType : Old Testament
       * ----------------------------------------
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
            data: this.getAllChapters(BookType.OldTestament)
          }
        ],
        // Chart Label
        chartLabels : this.getAllAbbreviationOfBook(BookType.OldTestament)
      },
      
      /**
       * ----------------------------------------
       * BookType : New Testament
       * ----------------------------------------
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
            data: this.getAllChapters(BookType.NewTestament)
          }
        ],
        // Chart Label
        chartLabels : this.getAllAbbreviationOfBook(BookType.NewTestament)
      },
    ]
  };


  // *********************************************************************
  // *********************************************************************
  // PRIVATE FUNCTIONS
  // *********************************************************************
  // *********************************************************************


  /**
   * [PRIVATE]
   * Set Dashboard Study
   * 
   * @param index 
   * @param completestudy 
   * @param totalchapter 
   * @param state 
   */
  private setStudy(index: number, completestudy: number, totalchapter: number, state: number) {

    this.dashboard.completeStudies = completestudy;
    this.dashboard.ongoingStudies = this.callOngoingStudy(completestudy, totalchapter);
    this.dashboard.bookTotalStudies = totalchapter;
    this.dashboard.percentageCompletion = this.callTotalPercentage(completestudy, totalchapter);

    // set book title per sergment
    switch (state) {
      case 1:
        this.dashboard.bookTestament = this.getBookTestamentById(index, BookType.OldAndNewTestament);
        this.dashboard.bookTitle = this.getTitleById(index, BookType.OldAndNewTestament);
        break;
      case 2:
        this.dashboard.bookTestament = this.getBookTestamentById(index, BookType.OldTestament);
        this.dashboard.bookTitle = this.getTitleById(index, BookType.OldTestament);
        break;
      case 3:
        this.dashboard.bookTestament = this.getBookTestamentById(index, BookType.NewTestament);
        this.dashboard.bookTitle = this.getTitleById(index, BookType.NewTestament);
        break;
      default:
        break;
    }
  }

  /**
   * [PRIVATE]
   * Calculate Total Percentage
   * 
   * @param completestudy 
   * @param totalchapter 
   */
  private callTotalPercentage(completestudy: number, totalchapter: number): number {

    let getdecimalvalue = completestudy / totalchapter;
    let percentagecompletion;

    if (getdecimalvalue < 0) {
      percentagecompletion = 0;
    } else {
      percentagecompletion = Math.floor((getdecimalvalue) * 100);
    }
    return percentagecompletion;
  }

  /**
   * [PRIVATE]
   * Calculate Ongoing Study
   * 
   * @param completestudy 
   * @param totalchapter 
   */
  private callOngoingStudy(completestudy: number, totalchapter: number): number {
    return totalchapter - completestudy;
  }
}