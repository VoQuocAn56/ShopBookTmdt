import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-tag-category',
  templateUrl: './menu-tag-category.component.html',
  styleUrls: ['./menu-tag-category.component.css']
})
export class MenuTagCategoryComponent implements OnInit {

  isActivite:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  OnMouseOver(){
    this.isActivite = true;
    console.log("hover");
  }
  OnMouseOut(){
    console.log("vb");
    this.isActivite = false;
  }
}
