import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { HomeFindComponent } from './home-find/home-find.component';
import { HomeTabsComponent } from './home-tabs/home-tabs.component';
import { RobustaComponent } from './product/robusta/robusta.component';
import { LatteComponent } from './product/latte/latte.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'robusta/:id', component: RobustaComponent },
  { path: 'latte/:id', component: LatteComponent },
];


@NgModule({
  declarations: [
    HomeComponent,
    ProductComponent,
    HomeFindComponent,
    HomeTabsComponent,
    RobustaComponent,
    LatteComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
