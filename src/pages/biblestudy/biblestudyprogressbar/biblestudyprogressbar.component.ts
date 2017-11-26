import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-biblestudy-progressbar',
  templateUrl: 'biblestudyprogressbar.html',
})
export class BibleStudyProgressbar {

  public  progressStatus: number;
  public progressMaxValue: number = 100;

  constructor(public navCtrl: NavController) {
    this.progressStatus = 10;
  }

  public checkProgressStatus(): number {
    if(this.progressMaxValue < this.progressStatus){
      this.progressStatus = 100;
    }
    return this.progressStatus;
  }

}