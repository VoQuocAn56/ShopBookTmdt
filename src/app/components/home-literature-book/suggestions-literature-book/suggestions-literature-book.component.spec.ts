import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionsLiteratureBookComponent } from './suggestions-literature-book.component';

describe('SuggestionsLiteratureBookComponent', () => {
  let component: SuggestionsLiteratureBookComponent;
  let fixture: ComponentFixture<SuggestionsLiteratureBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestionsLiteratureBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestionsLiteratureBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
