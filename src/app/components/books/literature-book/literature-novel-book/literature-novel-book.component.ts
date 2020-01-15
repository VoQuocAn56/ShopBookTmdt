import { Component, OnInit, Input } from '@angular/core';
import {Book} from '../../../../model/Book';

@Component({
  selector: 'app-literature-novel-book',
  templateUrl: './literature-novel-book.component.html',
  styleUrls: ['./literature-novel-book.component.css']
})
export class LiteratureNovelBookComponent implements OnInit {
  @Input() ListBooks:Book[];
  constructor() { }

  ngOnInit() {
  }

}
