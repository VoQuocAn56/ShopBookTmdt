import { Injectable } from '@angular/core';
import {ApiSupplierUrl} from '../../contracts/V1/ApiUrl/ApiSupplierUrl';
import {Supplier} from '../../model/Supplier';
import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SupplierService {

constructor(private httpClient:HttpClient) { }

  GetSupplierBySupplierId(supplierId:string):Observable<Supplier>{
    return this.httpClient.get<Supplier>(ApiSupplierUrl.GetSupplierByIdUrl  + supplierId).pipe(
      tap(() => console.log('Get Supplier by supplierId success')),
      catchError(() => of)
    )
  }
}
