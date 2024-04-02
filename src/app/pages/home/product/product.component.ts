import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  constructor(private location: Location) { }
  goBack(): void {
    this.location.back();
  }

  isActive: boolean = false;

  toggleActive() {
    this.isActive = !this.isActive;
  }

  activeLink: number | null = null;

  setActive(linkNumber: number): void {
    this.activeLink = linkNumber;
  }  
}
