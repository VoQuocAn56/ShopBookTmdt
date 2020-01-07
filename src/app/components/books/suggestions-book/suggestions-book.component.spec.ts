import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionsBookComponent } from './suggestions-book.component';

describe('SuggestionsBookComponent', () => {
  let component: SuggestionsBookComponent;
  let fixture: ComponentFixture<SuggestionsBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestionsBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestionsBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
