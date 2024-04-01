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

  public coffeeData = [
    {
      title: 'CappucinoFFF',
      id: 1,
      desc: 'With Steamed Milk'
    },
    {
      title: 'Latte',
      id: 2,
      desc: 'With nice'
    },
  ]

  public RobustaData = [
    {
      title: 'RobustaBeans',
      id: 1,
    },
    {
      title: 'Latte',
      id: 2,
    },
  ]
  public LatteData = [
    {
      title: 'LatteBeans',
      id: 1,
    },
    {
      title: 'Latte',
      id: 2,
    },
  ]
}
