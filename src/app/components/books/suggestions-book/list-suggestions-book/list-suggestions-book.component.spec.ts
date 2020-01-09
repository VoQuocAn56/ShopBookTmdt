import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSuggestionsBookComponent } from './list-suggestions-book.component';

describe('ListSuggestionsBookComponent', () => {
  let component: ListSuggestionsBookComponent;
  let fixture: ComponentFixture<ListSuggestionsBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSuggestionsBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSuggestionsBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
