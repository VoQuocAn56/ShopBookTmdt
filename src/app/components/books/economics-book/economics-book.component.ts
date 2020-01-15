import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-economics-book',
  templateUrl: './economics-book.component.html',
  styleUrls: ['./economics-book.component.css']
})
export class EconomicsBookComponent implements OnInit {
  listFakeEconomics:any = [1,2,3,4,5,6]
  constructor(private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
  }
  OnGoToHomeEconomics(){
    this.router.navigate(['../sach-kinh-te'],{relativeTo:this.activatedRoute});
  }

}
