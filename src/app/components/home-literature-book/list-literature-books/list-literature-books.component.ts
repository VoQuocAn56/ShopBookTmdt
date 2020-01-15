import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {BookService} from '../../../service/Book/Book.service';
import {ParamQueryCategory} from '../../../Common/ParamQuery/V1/ParamQueryCategory';
import {Book} from '../../../model/Book';

@Component({
  selector: 'app-list-literature-books',
  templateUrl: './list-literature-books.component.html',
  styleUrls: ['./list-literature-books.component.css']
})
export class ListLiteratureBooksComponent implements OnInit {

  ListBooks:Book[];
  ListSuggestBook:Book[];
  NameCategory:string;

  constructor(
    private router:Router, 
    private activatedRoute:ActivatedRoute, 
    private bookService:BookService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.NameCategory = params.get('name');
    
    })
    console.log(this.NameCategory);
    if(this.NameCategory == 'romatic'){
      this.GetBookByCategoryId(ParamQueryCategory.RomanticId);
    }else{
      this.GetBookByCategoryId(ParamQueryCategory.LightNovelId);
    }

    this.GetSuggestBook(ParamQueryCategory.RomanticId)
  }

  OnGotoDetailBook(book:Book){
    this.router.navigate(['../chitiet',book.bookId],{relativeTo:this.activatedRoute});
  }

  GetBookByCategoryId(Id:string){
    this.bookService.GetBookByCategoryId(Id).subscribe((data)=>{
      this.ListBooks = data;
      console.log(this.ListBooks);
    })
  }

  GetSuggestBook(Id:string){
    this.bookService.GetBookByCategoryId(Id).subscribe((data)=>{
      this.ListSuggestBook = data;
      console.log(this.ListBooks);
    })
  }
}
