import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-suggestions-book',
  templateUrl: './suggestions-book.component.html',
  styleUrls: ['./suggestions-book.component.css']
})
export class SuggestionsBookComponent implements OnInit {
  constructor(
      private router:Router, 
      private activatedRoute:ActivatedRoute
    ) { }

  ngOnInit() {
    //this.router.navigate(['/all-suggest-book'], {relativeTo:this.activatedRoute});
  }
}
