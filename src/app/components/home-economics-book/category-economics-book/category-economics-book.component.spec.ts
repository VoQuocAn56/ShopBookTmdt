import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryEconomicsBookComponent } from './category-economics-book.component';

describe('CategoryEconomicsBookComponent', () => {
  let component: CategoryEconomicsBookComponent;
  let fixture: ComponentFixture<CategoryEconomicsBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryEconomicsBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryEconomicsBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
