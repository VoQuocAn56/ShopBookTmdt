import { Component, OnInit, Input } from '@angular/core';
import {Book} from '../../../../model/Book';
import {ActivatedRoute, Router} from '@angular/router';
import {PathRoutes} from '../../../../contracts/PathRoutes';

@Component({
  selector: 'app-literature-romantic-book',
  templateUrl: './literature-romantic-book.component.html',
  styleUrls: ['./literature-romantic-book.component.css']
})

export class LiteratureRomanticBookComponent implements OnInit {
  
  @Input() ListBookRomatic:Book[];
  constructor(private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
  }

  OnGoToHomeLiterature(){
    this.router.navigate(['../'+PathRoutes.HomeLiterature, 'romatic'], {relativeTo:this.activatedRoute})
  }

  OnGotoDetailLiteratureBook(book:Book){
    this.router.navigate(['../'+PathRoutes.HomeDetailLiteratureBook ,book.bookId],{relativeTo:this.activatedRoute});
  }
}
