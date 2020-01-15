import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {PathRoutes} from '../../../../contracts/PathRoutes';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent implements OnInit {

  constructor(private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
  }

  OnGoToHome(){
    this.router.navigate(['../'+PathRoutes.Home], {relativeTo:this.activatedRoute}) 
  }
}
