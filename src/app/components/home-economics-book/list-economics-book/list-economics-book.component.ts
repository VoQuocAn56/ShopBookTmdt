import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-list-economics-book',
  templateUrl: './list-economics-book.component.html',
  styleUrls: ['./list-economics-book.component.css']
})
export class ListEconomicsBookComponent implements OnInit {
  listFakeEconomics:any = [1,2,3,4,5,6,1,2,3,4,5,6,7,8,9]
  constructor(private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
  }

  OnGotoDetailBook(){
    this.router.navigate(['./detail',1],{relativeTo:this.activatedRoute})
  }
}
