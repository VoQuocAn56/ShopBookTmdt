import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/Book';
import {BookService} from '../../service/Book/Book.service';
import {ParamQueryCategory} from './../../Common/ParamQuery/V1/ParamQueryCategory';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  ListLightNovel:Book[];
  ListRomantic:Book[];
  ListShortStory:Book[];
  ListNovel:Book[];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.GetLightNovelByCategoryId(ParamQueryCategory.LightNovelId);
    //this.GetBookByCategoryId(ParamQueryCategory.NovelId);
    this.GetRomanticByCategoryId(ParamQueryCategory.RomanticId);
    //this.GetBookByCategoryId(ParamQueryCategory.ShortStoryId);
   
  }

  GetLightNovelByCategoryId(id:string){
    this.bookService.GetBookByCategoryId(id).subscribe((data => {
      this.ListLightNovel = data;
    }))
  }
  GetRomanticByCategoryId(id:string){
    this.bookService.GetBookByCategoryId(id).subscribe((data => {
      this.ListRomantic = data;
    }))
  }
}
