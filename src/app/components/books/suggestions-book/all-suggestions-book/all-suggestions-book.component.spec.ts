import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSuggestionsBookComponent } from './all-suggestions-book.component';

describe('AllSuggestionsBookComponent', () => {
  let component: AllSuggestionsBookComponent;
  let fixture: ComponentFixture<AllSuggestionsBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllSuggestionsBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSuggestionsBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
