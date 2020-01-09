import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggestions-literature-book',
  templateUrl: './suggestions-literature-book.component.html',
  styleUrls: ['./suggestions-literature-book.component.css']
})
export class SuggestionsLiteratureBookComponent implements OnInit {
  listFakeItem:any = [1,2,3,4,5]
  constructor() { }

  ngOnInit() {
  }

}
