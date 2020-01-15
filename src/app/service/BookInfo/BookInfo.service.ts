import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiBookInfoUrl} from '../../contracts/V1/ApiUrl/ApiBookInfoUrl';
import {BookInfo} from '../../model/BookInfo';
import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookInfoService {

  constructor(private httpClient:HttpClient) { }

  GetBookInfoByBookId(bookId:string):Observable<BookInfo[]>{
    return this.httpClient.get<BookInfo[]>(ApiBookInfoUrl.GetBookInfoByBookIdUrl  + bookId).pipe(
      tap(() => console.log('Get Book info by book id success')),
      catchError(() => of)
    )
  }
}
