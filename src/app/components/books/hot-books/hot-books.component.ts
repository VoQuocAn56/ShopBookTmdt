import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hot-books',
  templateUrl: './hot-books.component.html',
  styleUrls: ['./hot-books.component.css']
})
export class HotBooksComponent implements OnInit {
  listFakeHot:any = [1,2,3,4,5,6]
  constructor() { }

  ngOnInit() {
  }

}
