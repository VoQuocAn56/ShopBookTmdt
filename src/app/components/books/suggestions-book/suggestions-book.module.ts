import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { AllSuggestionsBookComponent } from './all-suggestions-book/all-suggestions-book.component';
//import {SgtEconomicsBooksComponent} from'./sgt-economics-books/sgt-economics-books.component';
//import {SgtLiteratureBooksComponent} from './sgt-literature-books/sgt-literature-books.component';
import {Routes, RouterModule} from '@angular/router';
import { ListSuggestionsBookComponent } from './list-suggestions-book/list-suggestions-book.component'

/*
const routes: Routes =[
  {
    path:'',
    component:AllSuggestionsBookComponent,
    children:[
      {path:'/suggest-economics-book',component:SgtEconomicsBooksComponent},
      {path:'/suggest-literature-book',component:SgtLiteratureBooksComponent},
    ]
  }
]
*/
@NgModule({
  declarations: [
    //AllSuggestionsBookComponent,
    //SgtEconomicsBooksComponent,
    //SgtLiteratureBooksComponent
  ListSuggestionsBookComponent],
  imports: [
    CommonModule,
    //RouterModule.forChild(routes)
  ],
  exports:[]
})
export class SuggestionsBookModule { }
