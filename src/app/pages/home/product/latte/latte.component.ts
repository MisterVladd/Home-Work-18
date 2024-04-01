import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-latte',
  templateUrl: './latte.component.html',
  styleUrl: './latte.component.scss'
})
export class LatteComponent {
  constructor(private location: Location) { }
  goBack(): void {
    this.location.back();
  }
}
