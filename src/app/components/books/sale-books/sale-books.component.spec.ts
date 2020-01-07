import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleBooksComponent } from './sale-books.component';

describe('SaleBooksComponent', () => {
  let component: SaleBooksComponent;
  let fixture: ComponentFixture<SaleBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
