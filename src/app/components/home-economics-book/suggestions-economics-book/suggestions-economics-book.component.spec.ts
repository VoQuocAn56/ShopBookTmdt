import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionsEconomicsBookComponent } from './suggestions-economics-book.component';

describe('SuggestionsEconomicsBookComponent', () => {
  let component: SuggestionsEconomicsBookComponent;
  let fixture: ComponentFixture<SuggestionsEconomicsBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestionsEconomicsBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestionsEconomicsBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
