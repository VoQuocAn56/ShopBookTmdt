import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLiteratureBooksComponent } from './list-literature-books.component';

describe('ListLiteratureBooksComponent', () => {
  let component: ListLiteratureBooksComponent;
  let fixture: ComponentFixture<ListLiteratureBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLiteratureBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLiteratureBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
