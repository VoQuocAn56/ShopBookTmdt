import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotBooksComponent } from './hot-books.component';

describe('HotBooksComponent', () => {
  let component: HotBooksComponent;
  let fixture: ComponentFixture<HotBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
