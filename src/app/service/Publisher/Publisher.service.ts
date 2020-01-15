import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiPublisherUrl} from '../../contracts/V1/ApiUrl/ApiPublisherUrl';
import {Publisher} from '../../model/Publisher';
import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PublisherService {

constructor(private httpClient:HttpClient) { }

  GetPublisherByPublisherId(publisherId:string):Observable<Publisher>{
    return this.httpClient.get<Publisher>(ApiPublisherUrl.GePublisherByIdUrl  + publisherId).pipe(
      tap(() => console.log('Get publisher by publisherId success')),
      catchError(() => of)
    )
  }
}
