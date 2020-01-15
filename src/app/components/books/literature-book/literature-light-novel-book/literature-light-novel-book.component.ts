import { Component, OnInit, Input } from '@angular/core';
import {Book} from '../../../../model/Book';
import {Router, ActivatedRoute} from '@angular/router';
import {PathRoutes} from '../../../../contracts/PathRoutes';
@Component({
  selector: 'app-literature-light-novel-book',
  templateUrl: './literature-light-novel-book.component.html',
  styleUrls: ['./literature-light-novel-book.component.css']
})
export class LiteratureLightNovelBookComponent implements OnInit {
  
  @Input() ListBooks:Book[];
  constructor(private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
  }

  OnGoToHomeLiterature(){
    console.log("3213");
    this.router.navigate(['../'+PathRoutes.HomeLiterature, 'light-novel'], {relativeTo:this.activatedRoute})
  }

  OnGotoDetailLiteratureBook(book:Book){
    this.router.navigate(['../'+PathRoutes.HomeDetailLiteratureBook ,book.bookId],{relativeTo:this.activatedRoute});
  }
}
