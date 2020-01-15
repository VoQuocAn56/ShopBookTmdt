import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {ListLiteratureBooksComponent} from './list-literature-books/list-literature-books.component';
import {CategoryLiteratureBookComponent} from './category-literature-book/category-literature-book.component';
import {HomeLiteratureBookComponent} from '../home-literature-book/home-literature-book.component';
import {DetailLireratureBookComponent} from './detail-lirerature-book/detail-lirerature-book.component';
import {MenuTagCategoryComponent} from './menu-tag-category/menu-tag-category.component';
import { SuggestionsLiteratureBookComponent } from './suggestions-literature-book/suggestions-literature-book.component';

const routes :Routes = [
  {
    path:'', 
    component:HomeLiteratureBookComponent,
    children:[
      {path:':name', component:ListLiteratureBooksComponent},
      {path:'chitiet/:id',component:DetailLireratureBookComponent}
    ]
  }

]

@NgModule({
  declarations: [
    ListLiteratureBooksComponent,
    HomeLiteratureBookComponent,
    CategoryLiteratureBookComponent,
    DetailLireratureBookComponent,
    MenuTagCategoryComponent,
    SuggestionsLiteratureBookComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class LiteratureRoutingModule { }
