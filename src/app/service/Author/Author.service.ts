import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiAuthorUrl} from '../../contracts/V1/ApiUrl/ApiAuthorUrl';
import {Author} from '../../model/Author';
import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private httpClient:HttpClient) { }

  GetAuthorByAuthorId(authorId:string):Observable<Author>{
    return this.httpClient.get<Author>(ApiAuthorUrl.GetAuthorByAuthorIdUrl  + authorId).pipe(
      tap(() => console.log('Get author by authorId success')),
      catchError(() => of)
    )
  }
}
