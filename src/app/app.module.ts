import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TopBannerComponent } from './components/home/top/top-banner/top-banner.component'
import { TopHeaderComponent } from './components/home/top/top-header/top-header.component';
import { MenuComponent } from './components/home/menu/menu.component';
import { SubHomeBannerComponent } from './components/home/banner/sub-home-banner/sub-home-banner.component';
import { HomeBannerComponent } from './components/home/banner/home-banner/home-banner.component';

import { SaleBooksComponent } from './components/books/sale-books/sale-books.component';
import { HotBooksComponent} from './components/books/hot-books/hot-books.component';
import { SuggestionsBookComponent } from './components/books/suggestions-book/suggestions-book.component';
import {ListSuggestionsBookComponent} from './components/books/suggestions-book/list-suggestions-book/list-suggestions-book.component';
import { EconomicsBookComponent } from './components/books/economics-book/economics-book.component';

import {CategoryService} from './service/Category/Category.service';
import {BookService} from './service/Book/Book.service';
import {AuthorService} from './service/Author/Author.service';
import {BookInfoService} from './service/BookInfo/BookInfo.service';
import {PublisherService} from './service/Publisher/Publisher.service';
import {SupplierService} from './service/Supplier/Supplier.service';

import { BooksComponent } from './components/books/books.component';
import { LiteratureRomanticBookComponent } from './components/books/literature-book/literature-romantic-book/literature-romantic-book.component';
import { LiteratureNovelBookComponent } from './components/books/literature-book/literature-novel-book/literature-novel-book.component';
import { LiteratureShortStoryBookComponent } from './components/books/literature-book/literature-short-story-book/literature-short-story-book.component';
import { LiteratureLightNovelBookComponent } from './components/books/literature-book/literature-light-novel-book/literature-light-novel-book.component';

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

    LiteratureRomanticBookComponent,
    LiteratureNovelBookComponent,
    LiteratureShortStoryBookComponent,
    LiteratureLightNovelBookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CategoryService,
    BookService,
    AuthorService,
    BookInfoService,
    PublisherService,
    SupplierService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
