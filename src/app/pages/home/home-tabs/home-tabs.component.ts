import { Component } from '@angular/core';

@Component({
  selector: 'app-home-tabs',
  templateUrl: './home-tabs.component.html',
  styleUrl: './home-tabs.component.scss'
})
export class HomeTabsComponent {
  selectedTab = 'tab1';

  selectTab(tabName: string) {
    this.selectedTab = tabName;
  }
}
