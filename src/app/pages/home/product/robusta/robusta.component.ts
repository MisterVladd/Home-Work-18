import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-robusta',
  templateUrl: './robusta.component.html',
  styleUrl: './robusta.component.scss'
})
export class RobustaComponent {
  constructor(private location: Location) { }
  goBack(): void {
    this.location.back();
  }
}
