import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiCategoryUrl} from '../../contracts/V1/ApiUrl/ApiCategoryUrl';
import {Category} from '../../model/Category';
import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient) { }

  GetAllCategtory():Observable<Category[]>{
    return this.httpClient.get<Category[]>(ApiCategoryUrl.GetCategoryUrl).pipe(
      tap(() => console.log('Get category success')),
      catchError(() => of)
    )
  }

  GetCategoryByCategoryTagId(categoruTagId:string):Observable<Category[]>{
    return this.httpClient.get<Category[]>(ApiCategoryUrl.GetCategoryByCategoryTagId  + categoruTagId).pipe(
      tap(() => console.log('Get category by categoryTag id success')),
      catchError(() => of)
    )
  }
}

