/**
 * Import Angular
 */
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { TimeAgoPipe } from "time-ago-pipe";
//import { Ng2OrderModule } from "ng2-order-pipe";
import { OrderModule } from 'ngx-order-pipe';
/**
 * Import Ionic
 */
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
/**
 * Import Others
 */
import { ChartsModule } from 'ng2-charts';
import { MyApp } from './app.component';
/**
 * Import Pages
 */
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
// Basic Pages
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ForgotpasswordPage } from '../pages/forgotpassword/forgotpassword';
import { MenuPage } from '../pages/menu/menu';
import { StudyInputPage } from '../pages/study/study-input';
import { StudyPreviewPage } from '../pages/study/study-preview';

import { StudiesService } from "../services/studies/studies.service";


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    SignupPage,
    ForgotpasswordPage,
    MenuPage,
    StudyInputPage,
    StudyPreviewPage,
    TimeAgoPipe,
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    FormsModule,
    OrderModule,
    IonicModule.forRoot(MyApp, {
      tabsPlacement: 'bottom',
        platforms: { 
          android: {tabsPlacement: 'bottom'},
          ios: { tabsPlacement: 'bottom' },
          windows: {tabsPlacement: 'bottom'}
        }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    SignupPage,
    ForgotpasswordPage,
    MenuPage,
    StudyInputPage,
    StudyPreviewPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    StudiesService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
