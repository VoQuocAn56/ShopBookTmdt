import { Component, OnInit, Input } from '@angular/core';
import {Book} from '../../../../model/Book';

@Component({
  selector: 'app-literature-short-story-book',
  templateUrl: './literature-short-story-book.component.html',
  styleUrls: ['./literature-short-story-book.component.css']
})
export class LiteratureShortStoryBookComponent implements OnInit {


  @Input() ListBooks:Book[];
  constructor() { }

  ngOnInit() {
  }

}
