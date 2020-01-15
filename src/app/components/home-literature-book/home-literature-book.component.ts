import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {BookService} from './../../service/Book/Book.service';
import {ParamQueryCategory} from './../../Common/ParamQuery/V1/ParamQueryCategory';
import {Book} from './../../model/Book';


@Component({
  selector: 'app-home-literature-book',
  templateUrl: './home-literature-book.component.html',
  styleUrls: ['./home-literature-book.component.css']
})
export class HomeLiteratureBookComponent implements OnInit {



  constructor(
    private router:Router, 
    private activatedRoute:ActivatedRoute, 
  ) { }

  ngOnInit() {

  }
  
  
}
