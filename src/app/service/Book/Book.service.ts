import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiBookUrl} from '../../contracts/V1/ApiUrl/ApiBookUrl';
import {Book} from '../../model/Book';
import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient:HttpClient) { }

  GetBookByCategoryId(categoryId:string):Observable<Book[]>{
    return this.httpClient.get<Book[]>(ApiBookUrl.GetBookByCategoryIdUrl  + categoryId).pipe(
      tap(() => console.log('Get Book by categoryTag id success')),
      catchError(() => of)
    )
  }
  
  GetBookByBookId(bookId:string):Observable<Book>{
    return this.httpClient.get<Book>(ApiBookUrl.GetBookByBookId + bookId).pipe(
      tap(() => console.log('Get book by book id success')),
      catchError(() => of)
    )
  }
}
