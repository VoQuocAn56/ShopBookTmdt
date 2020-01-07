import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { AllSuggestionsBookComponent } from './all-suggestions-book/all-suggestions-book.component';
import {SgtEconomicsBooksComponent} from'./sgt-economics-books/sgt-economics-books.component';
import {SgtLiteratureBooksComponent} from './sgt-literature-books/sgt-literature-books.component';

@Component({
  selector: 'app-suggestions-book',
  templateUrl: './suggestions-book.component.html',
  styleUrls: ['./suggestions-book.component.css']
})
export class SuggestionsBookComponent implements OnInit {

  public isActiviteSgtEconomicsBook = false;
  public isActiviteSgtLiteratureBook = false;
  public isActiviteChildrenBook = false;
  public isActiviteAllSgtBook = false;

  constructor(
      private router:Router, 
      private activatedRoute:ActivatedRoute
    ) { }

  ngOnInit() {
    //this.router.navigate(['/all-suggest-book'], {relativeTo:this.activatedRoute});
    this.isActiviteAllSgtBook = true;
  }

  OnGotoAllSuggestionsBook(){
    this.isActiviteAllSgtBook = !this.isActiviteAllSgtBook;
    this.isActiviteSgtLiteratureBook = false;
    this.isActiviteSgtEconomicsBook = false;
    this.isActiviteChildrenBook = false;
  }

  OnGotoAllLiteratureBook(){
    this.isActiviteSgtLiteratureBook = !this.isActiviteSgtLiteratureBook
    this.isActiviteAllSgtBook = false;
    this.isActiviteSgtEconomicsBook = false;
    this.isActiviteChildrenBook = false;
  }

  OnGotoAllEconomicsBook(){
    this.isActiviteSgtEconomicsBook = !this.isActiviteSgtEconomicsBook;
    this.isActiviteSgtLiteratureBook = false;
    this.isActiviteChildrenBook = false;
    this.isActiviteAllSgtBook = false;
  }

  OnGotoAllChildrenBook(){
    this.isActiviteChildrenBook = !this.isActiviteChildrenBook;
    this.isActiviteSgtEconomicsBook = false;
    this.isActiviteSgtLiteratureBook = false;
    this.isActiviteAllSgtBook = false;
  }
}
