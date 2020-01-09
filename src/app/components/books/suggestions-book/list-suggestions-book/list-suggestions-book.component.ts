import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-suggestions-book',
  templateUrl: './list-suggestions-book.component.html',
  styleUrls: ['./list-suggestions-book.component.css']
})
export class ListSuggestionsBookComponent implements OnInit {

  listFakeItem:any = [1,2,3,4,5,6,1,2,3,4,5,6]
  constructor() { }

  ngOnInit() {
  }

}
