import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryLiteratureBookComponent } from './category-literature-book.component';

describe('CategoryLiteratureBookComponent', () => {
  let component: CategoryLiteratureBookComponent;
  let fixture: ComponentFixture<CategoryLiteratureBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryLiteratureBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryLiteratureBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
