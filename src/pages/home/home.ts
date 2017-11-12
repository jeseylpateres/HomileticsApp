import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { NavController, App } from 'ionic-angular';
import { TimeAgoPipe } from "time-ago-pipe";
import { OrderModule } from 'ngx-order-pipe';
/**
 * ENUMS
 */
import { BookType } from "../../core/enums/booktype.enum";
import { GotoPage } from "../../core/enums/gotopage.enum";
/**
 * SERVICES
 */
import { BibleService } from "../../services/bible/bible.service";
import { StudyListService } from "./studylist.service";
import { StudiesService } from "../../services/studies/studies.service";
/**
 * MODELS
 */
import { HomeModel } from "./home.model";
import { StudyListModel } from "./studylist.model";
/**
 * PAGES
 */
import { MenuPage } from '../menu/menu';
import { StudyInputPage } from '../study/study-input';
import { StudyPreviewPage } from "../study/study-preview";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [BibleService, StudyListService, StudiesService]
})
export class HomePage implements OnInit {

  SegmentBookType: string;
  homeModel: HomeModel;
  studylist: StudyListModel[] = [];

  constructor(public navCtrl: NavController,
    public app: App,
    private bibleService: BibleService,
    private studyListService: StudyListService,
    private studiesService: StudiesService) {

    this.homeModel = new HomeModel();
  }

  /** 
   * NG OnInit
  */
  ngOnInit() {
    this.SegmentBookType = "entirebible";

    this.homeModel.completeStudies = 0;
    this.homeModel.ongoingStudies = 0;
    this.homeModel.ongoingQuizes = 0;
    this.homeModel.bookTestament = this.bibleService.getBookTestamentById(0, BookType.OldAndNewTestament);
    this.homeModel.bookTitle = this.bibleService.getTitleById(0, BookType.OldAndNewTestament);
    this.homeModel.bookTotalStudies = 0;
    this.homeModel.percentageCompletion = 0;

  }

  /**
   * Ionic View Will Enter
   */
  ionViewWillEnter() {
    this.studylist = this.studyListService.getStudyList(0, BookType.OldAndNewTestament);
  }

  /**
   * OnLoad Other Pages
   * 
   * @param gotoPage 
   */
  private onLoadPage(gotoPage: GotoPage) {

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

  /**
   * ItemSelected from StudyList
   * Load to StudyInputPage with NavParams
   * 
   * @param item 
   */
  itemSelected(item: string) {
    console.log("Selected Item", item);
    this.navCtrl.push(StudyPreviewPage, item);
  }

  /**
   * [PUBLIC]
   * Set Random Data
   * 
   * @param segment 
   */
  public randomize(segment: number): void {
    let clone = null;
    switch (segment) {
      // Old & New Testament
      case BookType.OldAndNewTestament:
        {
          this.setStudy(
            0,
            this.DashboardChart.chartDataPerBookType[0].chartDataSet[0].data[0],
            this.DashboardChart.chartDataPerBookType[0].chartDataSet[1].data[0],
            BookType.OldAndNewTestament);


          this.studylist = this.studyListService.getStudyList(0, BookType.OldAndNewTestament);

          clone = JSON.parse(JSON.stringify(this.DashboardChart.chartDataPerBookType[0].chartDataSet));
          clone[0].data = this.bibleService.setRandomDataForAllChapters(BookType.OldAndNewTestament);
          this.DashboardChart.chartDataPerBookType[0].chartDataSet = clone;

          this.generateStudyComputation(this.bibleService.getIndexData(), this.DashboardChart.chartDataPerBookType[0].chartDataSet[1].data[0]);
        }
        break;
      // Old Testament Only
      case BookType.OldTestament:
        {
          this.setStudy(
            0,
            this.DashboardChart.chartDataPerBookType[0].chartDataSet[0].data[0],
            this.DashboardChart.chartDataPerBookType[0].chartDataSet[1].data[0],
            BookType.OldTestament);

          this.studylist = this.studyListService.getStudyList(0, BookType.OldTestament);

          clone = JSON.parse(JSON.stringify(this.DashboardChart.chartDataPerBookType[1].chartDataSet));
          clone[0].data = this.bibleService.setRandomDataForAllChapters(BookType.OldTestament);
          this.DashboardChart.chartDataPerBookType[1].chartDataSet = clone;

          this.generateStudyComputation(this.bibleService.getIndexData(), this.DashboardChart.chartDataPerBookType[0].chartDataSet[1].data[0]);
        }
        break;
      // New Testament Only
      case BookType.NewTestament:
        {
          this.setStudy(
            0,
            this.DashboardChart.chartDataPerBookType[0].chartDataSet[0].data[0],
            this.DashboardChart.chartDataPerBookType[0].chartDataSet[1].data[0],
            BookType.NewTestament);

          this.studylist = this.studyListService.getStudyList(0, BookType.NewTestament);

          clone = JSON.parse(JSON.stringify(this.DashboardChart.chartDataPerBookType[2].chartDataSet));
          clone[0].data = this.bibleService.setRandomDataForAllChapters(BookType.NewTestament);
          this.DashboardChart.chartDataPerBookType[2].chartDataSet = clone;

          this.generateStudyComputation(this.bibleService.getIndexData(), this.DashboardChart.chartDataPerBookType[0].chartDataSet[1].data[0]);
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
  public clickChartForOldAndNew(e: any): void {
    //console.log(e);
    let x = e.active[0];
    if (x !== undefined) {
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
  public howeveredChartForOldAndNew(e: any): void {
    console.log("HowverResult: " + e);
  }


  // Events: Click for Bar Chart - OT
  /**
   * [EVENTS] Click
   * OLD Testament
   * 
   * @param e 
   */
  public clickChartForOld(e: any): void {
    console.log(e);

    let x = e.active[0];
    if (x !== undefined) {
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
  public howeveredChartForOld(e: any): void {
    console.log("HowverResult: " + e);
  }


  /**
   * [EVENTS] Click
   * NEW Testament
   * 
   * @param e 
   */
  public clickChartForNew(e: any): void {
    console.log(e);

    let x = e.active[0];
    if (x !== undefined) {
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
  public howeveredChartForNew(e: any): void {
    console.log("HowverResult: " + e);
  }

  /**
   * *********************************************************************
   * *********************************************************************
   * [PUBLIC] : Chart Dashboard
   * *********************************************************************
   * *********************************************************************
   */
  public DashboardChart: any = {
    chartType: 'bar',
    chartLegend: false,
    chartColors: [
      {
        backgroundColor: 'rgba(61, 163, 108, 1)',
        borderColor: 'rgba(61, 163, 108, 1)'
      }
    ],
    // Chart Data Per BookType
    chartDataPerBookType: [

      /**
       * ----------------------------------------
       * BookType : Old and New Testament
       * ----------------------------------------
       */
      {
        // Chart Options
        chartOptions: {
          scaleShowVerticalLines: false,
          responsive: false,
          //maintainAspectRatio: true,
          title: {
            display: false,
            text: 'ENTIRE BIBLE'
          },
          scales: {
            xAxes: [{
              stacked: true
            }],
            yAxes: [{
              stacked: false
            }]
          }
        },
        // Chart DataSet
        chartDataSet: [
          {
            label: 'Complete Study',
            data: [] = this.bibleService.clearAllDataForAllChapters(BookType.OldAndNewTestament)
          },
          {
            label: 'Total Chapter',
            data: this.bibleService.getAllChapters(BookType.OldAndNewTestament)
          }
        ],
        // Chart Label
        chartLabels: this.bibleService.getAllAbbreviationOfBook(BookType.OldAndNewTestament)
      },

      /**
       * ----------------------------------------
       * BookType : Old Testament
       * ----------------------------------------
       */
      {
        // Chart Options
        chartOptions: {
          scaleShowVerticalLines: false,
          responsive: false,
          //maintainAspectRatio: true,
          title: {
            display: false,
            text: 'OLD TESTAMENT'
          },
          scales: {
            xAxes: [{
              stacked: true
            }],
            yAxes: [{
              stacked: false
            }]
          }
        },
        // Chart DataSet
        chartDataSet: [
          {
            label: 'Complete Study',
            data: [] = this.bibleService.clearAllDataForAllChapters(BookType.OldTestament)
          },
          {
            label: 'Total Chapter',
            data: this.bibleService.getAllChapters(BookType.OldTestament)
          }
        ],
        // Chart Label
        chartLabels: this.bibleService.getAllAbbreviationOfBook(BookType.OldTestament)
      },

      /**
       * ----------------------------------------
       * BookType : New Testament
       * ----------------------------------------
       */
      {
        // Chart Options
        chartOptions: {
          scaleShowVerticalLines: false,
          responsive: false,
          //maintainAspectRatio: true,
          title: {
            display: false,
            text: 'NEW TESTAMENT'
          },
          scales: {
            xAxes: [{
              stacked: true
            }],
            yAxes: [{
              stacked: false
            }]
          }
        },
        // Chart DataSet
        chartDataSet: [
          {
            label: 'Complete Study',
            data: [] = this.bibleService.clearAllDataForAllChapters(BookType.NewTestament)
          },
          {
            label: 'Total Chapter',
            data: this.bibleService.getAllChapters(BookType.NewTestament)
          }
        ],
        // Chart Label
        chartLabels: this.bibleService.getAllAbbreviationOfBook(BookType.NewTestament)
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

    this.generateStudyComputation(completestudy, totalchapter);

    // set book title per sergment
    switch (state) {
      case BookType.OldAndNewTestament:
        {
          console.log(index);
          this.homeModel.bookTestament = this.bibleService.getBookTestamentById(index, BookType.OldAndNewTestament);
          this.homeModel.bookTitle = this.bibleService.getTitleById(index, BookType.OldAndNewTestament);
          this.studylist = this.studyListService.getStudyListByBookId(index, 0, BookType.OldAndNewTestament);
        }
        break;
      case BookType.OldTestament:
        {
          this.homeModel.bookTestament = this.bibleService.getBookTestamentById(index, BookType.OldTestament);
          this.homeModel.bookTitle = this.bibleService.getTitleById(index, BookType.OldTestament);
          this.studylist = this.studyListService.getStudyListByBookId(index, 0, BookType.OldTestament);
        }
        break;
      case BookType.NewTestament:
        {
          this.homeModel.bookTestament = this.bibleService.getBookTestamentById(index, BookType.NewTestament);
          this.homeModel.bookTitle = this.bibleService.getTitleById(index, BookType.NewTestament);
          this.studylist = this.studyListService.getStudyListByBookId(index, 0, BookType.NewTestament);
        }
        break;
      default:
        break;
    }
  }

  private generateStudyComputation(completestudy: number, totalchapter: number) {
    this.homeModel.completeStudies = completestudy;
    this.homeModel.ongoingStudies = this.calOngoingStudy(completestudy, totalchapter);
    this.homeModel.bookTotalStudies = totalchapter;
    this.homeModel.percentageCompletion = this.calTotalPercentage(completestudy, totalchapter);
  }

  /**
   * [PRIVATE]
   * Calculate Total Percentage
   * 
   * @param completestudy 
   * @param totalchapter 
   */
  private calTotalPercentage(completestudy: number, totalchapter: number): number {

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
  private calOngoingStudy(completestudy: number, totalchapter: number): number {
    return totalchapter - completestudy;
  }
}