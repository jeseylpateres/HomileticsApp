import { Component } from '@angular/core';

import { StudyInputPage } from '../study-input/study-input';
import { MenuPage } from '../menu/menu';
import { HomePage } from '../home/home';

@Component({
  selector: 'tabs-sml',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MenuPage;
  tab2Root = HomePage;
  tab3Root = StudyInputPage;

  constructor() {

  }
}
