import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-list-literature-books',
  templateUrl: './list-literature-books.component.html',
  styleUrls: ['./list-literature-books.component.css']
})
export class ListLiteratureBooksComponent implements OnInit {

  listFakeEconomics:any = [1,2,3,4,5,6,1,2,3,4,5,6,7,8,9]

  constructor(private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
  
  }

  OnGotoDetailBook(){
    this.router.navigate(['./detail',1],{relativeTo:this.activatedRoute});
  }
}
