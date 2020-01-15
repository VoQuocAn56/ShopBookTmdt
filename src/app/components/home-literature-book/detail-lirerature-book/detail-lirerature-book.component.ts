import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router';
import {BookService} from '../../../service/Book/Book.service';
import {AuthorService} from '../../../service/Author/Author.service';
import {BookInfoService} from '../../../service/BookInfo/BookInfo.service';
import {PublisherService} from '../../../service/Publisher/Publisher.service';
import {SupplierService} from '../../../service/Supplier/Supplier.service';

import {Book} from '../../../model/Book';
import {BookInfo} from '../../../model/BookInfo';
import {Author} from '../../../model/Author';
import {Publisher} from '../../../model/Publisher';
import {Supplier} from '../../../model/Supplier';

@Component({
  selector: 'app-detail-lirerature-book',
  templateUrl: './detail-lirerature-book.component.html',
  styleUrls: ['./detail-lirerature-book.component.css']
})
export class DetailLireratureBookComponent implements OnInit {

  book:Book;
  author:Author;
  publisher:Publisher;
  supplier:Supplier;
  ListBookInfo:BookInfo[];
  BookId:string
  publishingYear:Date;

  constructor(
    private activatedRoute:ActivatedRoute, 
    private bookService:BookService,
    private authorService:AuthorService,
    private bookInfoService:BookInfoService,
    private publisherService:PublisherService,
    private supplierService:SupplierService,
    
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.BookId = params.get('id');
    })

    this.GetBookByBookIdFromService(this.BookId);
    this.GetBooKInfoByBookIdFromService(this.BookId);
   
  }

  GetBookByBookIdFromService(id:string){
    this.bookService.GetBookByBookId(id).subscribe((data => {
      this.book = data
      this.publishingYear = data.publishingYear;
      
      this.GetAuthorByAuthorIdFromService(this.book.authorId);
      this.GetPublisherByPublisherIdFromService(this.book.publisherId);
      this.GetSupplierBySupplierIdFromService(this.book.supplierId);
    }))
  }

  GetBooKInfoByBookIdFromService(id:string){
    this.bookInfoService.GetBookInfoByBookId(id).subscribe((data =>{
      this.ListBookInfo = data;
    }))
  }

  GetAuthorByAuthorIdFromService(id:string){
    this.authorService.GetAuthorByAuthorId(id).subscribe((data =>{
      this.author = data;
    }))
  }

  GetPublisherByPublisherIdFromService(Id:string){
    this.publisherService.GetPublisherByPublisherId(Id).subscribe((data =>{
      this.publisher = data;
    }))
  }

  GetSupplierBySupplierIdFromService(Id:string){
    this.supplierService.GetSupplierBySupplierId(Id).subscribe((data =>{
      this.supplier = data;
    }))
  }
}
