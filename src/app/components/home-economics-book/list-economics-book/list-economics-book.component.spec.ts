import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEconomicsBookComponent } from './list-economics-book.component';

describe('ListEconomicsBookComponent', () => {
  let component: ListEconomicsBookComponent;
  let fixture: ComponentFixture<ListEconomicsBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEconomicsBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEconomicsBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
