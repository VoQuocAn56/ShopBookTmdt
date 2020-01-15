import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-menu-tag-category-economics',
  templateUrl: './menu-tag-category-economics.component.html',
  styleUrls: ['./menu-tag-category-economics.component.css']
})
export class MenuTagCategoryEconomicsComponent implements OnInit {

  constructor(private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
  }

  OnGoToHomeLiterature(){
    this.router.navigate(['../sach-van-hoc'],{relativeTo:this.activatedRoute})
  }

}
