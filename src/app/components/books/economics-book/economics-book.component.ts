import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-economics-book',
  templateUrl: './economics-book.component.html',
  styleUrls: ['./economics-book.component.css']
})
export class EconomicsBookComponent implements OnInit {
  listFakeEconomics:any = [1,2,3,4,5,6]
  constructor() { }

  ngOnInit() {
  }

}
