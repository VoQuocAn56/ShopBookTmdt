import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TopBannerComponent } from './components/home/top/top-banner/top-banner.component'
import { TopHeaderComponent } from './components/home/top/top-header/top-header.component';
import { MenuComponent } from './components/home/menu/menu.component';
import { SubHomeBannerComponent } from './components/home/banner/sub-home-banner/sub-home-banner.component';
import { HomeBannerComponent } from './components/home/banner/home-banner/home-banner.component';
import { BooksComponent } from './components/books/books.component';
import { SaleBooksComponent } from './components/books/sale-books/sale-books.component';
import { HotBooksComponent} from './components/books/hot-books/hot-books.component';
import { SuggestionsBookComponent } from './components/books/suggestions-book/suggestions-book.component';
import {ListSuggestionsBookComponent} from './components/books/suggestions-book/list-suggestions-book/list-suggestions-book.component';
import { EconomicsBookComponent } from './components/books/economics-book/economics-book.component';
import { DetailBookComponent } from './components/books/detail-book/detail-book.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopBannerComponent,
    TopHeaderComponent,
    MenuComponent,
    SubHomeBannerComponent,
    HomeBannerComponent,

    BooksComponent,
    HotBooksComponent,
    SaleBooksComponent,
    SuggestionsBookComponent,

    ListSuggestionsBookComponent,

    EconomicsBookComponent,

    DetailBookComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
