/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BookInfoService } from './BookInfo.service';

describe('Service: BookInfo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookInfoService]
    });
  });

  it('should ...', inject([BookInfoService], (service: BookInfoService) => {
    expect(service).toBeTruthy();
  }));
});
