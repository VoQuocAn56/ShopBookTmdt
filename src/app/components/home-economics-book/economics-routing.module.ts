import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CategoryEconomicsBookComponent} from './category-economics-book/category-economics-book.component';
import {DetailEconomicsBookComponent} from './detail-economics-book/detail-economics-book.component';
import {ListEconomicsBookComponent} from './list-economics-book/list-economics-book.component';
import {MenuTagCategoryEconomicsComponent} from './menu-tag-category-economics/menu-tag-category-economics.component';
import {HomeEconomicsBookComponent} from './home-economics-book.component';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path:'', 
    component:HomeEconomicsBookComponent,
    children:[
      {path:'', component:ListEconomicsBookComponent},
      {path:"detail/:id", component:DetailEconomicsBookComponent}
    ]
  }
]

@NgModule({
  declarations: [
    HomeEconomicsBookComponent,
    CategoryEconomicsBookComponent,
    DetailEconomicsBookComponent,
    ListEconomicsBookComponent,
    MenuTagCategoryEconomicsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class EconomicsRoutingModule { }
