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
      title: 'Cappucino',
      desc: 'With Steamed Milk',
      cost: '4.20',
      star: '4.5',
      id: 1,
    },
    {
      title: 'Cappucino',
      desc: 'With Foam',
      cost: '4.20',
      star: '4.2',
      id: 2,
    },
    {
      title: 'Cappucino',
      desc: 'With Steamed Milk',
      cost: '4.20',
      star: '4.5',
      id: 3,
    },
  ]

  public RobustaData = [
    {
      title: 'Robusta Beans',
      desc: 'Medium Roasted',
      cost: '4.20',
      id: 1,
    },
    {
      title: 'Cappucino',
      desc: 'With Steamed Milk',
      cost: '4.20',
      id: 2,
    },
    {
      title: 'Cappucino',
      desc: 'With Steamed Milk',
      cost: '4.20',
      id: 3,
    },
  ]
  public LatteData = [
    {
      title: 'Robusta Beans',
      desc: 'Medium Roasted',
      cost: '4.20',
      id: 1,
    },
    {
      title: 'Cappucino',
      desc: 'With Steamed Milk',
      cost: '4.20',
      id: 2,
    },
    {
      title: 'Cappucino',
      desc: 'With Steamed Milk',
      cost: '4.20',
      id: 3,
    },
  ]
}
