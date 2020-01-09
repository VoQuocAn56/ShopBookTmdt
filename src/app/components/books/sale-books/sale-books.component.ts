import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-sale-books',
  templateUrl: './sale-books.component.html',
  styleUrls: ['./sale-books.component.css']
})
export class SaleBooksComponent implements OnInit {

  listFakeSaleBook:any = [1,2,3,4,5,6]

  constructor(private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
  }

  OnGotoDetailBook(){
    this.router.navigate(['../sach-van-hoc'],{relativeTo:this.activatedRoute});
  }
}
