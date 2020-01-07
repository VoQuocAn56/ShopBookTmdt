import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SgtLiteratureBooksComponent } from './sgt-literature-books.component';

describe('SgtLiteratureBooksComponent', () => {
  let component: SgtLiteratureBooksComponent;
  let fixture: ComponentFixture<SgtLiteratureBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SgtLiteratureBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SgtLiteratureBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
