/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TagCategoryService } from './TagCategory.service';

describe('Service: TagCategory', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TagCategoryService]
    });
  });

  it('should ...', inject([TagCategoryService], (service: TagCategoryService) => {
    expect(service).toBeTruthy();
  }));
});
