import { Component, OnInit, Input } from '@angular/core';
import {Book} from '../../../model/Book';

@Component({
  selector: 'app-suggestions-literature-book',
  templateUrl: './suggestions-literature-book.component.html',
  styleUrls: ['./suggestions-literature-book.component.css']
})
export class SuggestionsLiteratureBookComponent implements OnInit {
  @Input() ListBooks:Book[];

  constructor() { }

  ngOnInit() {
    console.log(this.ListBooks);
  }

}
