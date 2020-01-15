import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../../service/Category/Category.service';
import {Category} from '../../../model/Category';
import {ParamQueryCategoryTag} from '../../../Common/ParamQuery/V1/ParamQueryCategoryTag';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  ListEconomicsBook:Category[];
  ListChildBook:Category[];
  ListLiteratureBook:Category[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.GetCategoryByCategoryTagId(ParamQueryCategoryTag.EconomicsBookTagId);
    this.GetCategoryByCategoryTagId(ParamQueryCategoryTag.ChildBookTagId);
    this.GetCategoryByCategoryTagId(ParamQueryCategoryTag.LiteratureBookTagId);
  }
  
  GetCategoryByCategoryTagId(id:string){
    this.categoryService.GetCategoryByCategoryTagId(id).subscribe((data => {
      switch(id){
        case ParamQueryCategoryTag.EconomicsBookTagId:
          this.ListEconomicsBook = data;
          break;
        case ParamQueryCategoryTag.LiteratureBookTagId:
          this.ListLiteratureBook = data;
          break;
        case ParamQueryCategoryTag.ChildBookTagId:
          this.ListChildBook = data;
          break;
      }
    }))
  }
}
