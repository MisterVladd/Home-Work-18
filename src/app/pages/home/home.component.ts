import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public coffeeData = [
    {
      title: 'Cappucino',
      desc: 'With Steamed Milk',
      cost: 4.20,
    },
    {
      title: 'Cappucino',
      desc: 'With Foam',
      cost: 4.20,
    },
  ]

}
